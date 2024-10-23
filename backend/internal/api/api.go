package api

import (
	"blogi/internal/config"
	"blogi/internal/postgres"
	"blogi/pkg/validate"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type API struct{ APIConfig }

type APIConfig struct {
	config.APIConfig
	DB *postgres.Connection
}

func Run(conf APIConfig) {
	e := echo.New()
	e.Validator = validate.NewEchoValidator()

	e.Use(middleware.Recover())
	e.Use(middleware.Logger())
	e.Use(middleware.Secure())
	e.Use(middleware.CORS())
	e.Use(middleware.Gzip())

	api := API{conf}

	auth := e.Group("/auth")
	{
		auth.POST("/sign-up", nil)     // db.[users].CreateUser
		auth.POST("/sign-in", nil)     // db.[users].GetUserAuthData
		auth.POST("/sign-out", nil)    // TODO[invalidate]
		auth.POST("/refresh", nil)     // db.[users].GetUserAuthData & TODO[invalidation-check]
		auth.POST("/user-exists", nil) // db.[users].GetUsernameExists
	}

	// TODO: set admin auth middleware
	dashboard := e.Group("/api/dashboard")
	{
		blog := dashboard.Group("/blogs")
		{
			blog.GET("", nil)        // db.[blogs].ListBlogs & db.[blogs].ListBlogsCount
			blog.GET("/:id", nil)    // db.[blogs].GetBlog
			blog.PATCH("/:id", nil)  // db.[blogs].UpdateBlog
			blog.DELETE("/:id", nil) // db.[blogs].DeleteBlog
		}

		users := dashboard.Group("/users")
		{
			users.GET("", api.getDashboardUsers)
			users.GET("/:id", api.getDashboardUser)
			users.PATCH("/:id", api.updateDashboardUser)
		}
	}

	// TODO: set user auth middleware
	profile := e.Group("/profile")
	{
		profile.GET("", nil)   // db.[users].GetUser & db.[blogs].ListAuthorBlogs
		profile.PATCH("", nil) // db.[users].UpdateUser

		blog := profile.Group("/blog")
		{
			blog.POST("", nil)       // db.[blogs].CreateBlog
			blog.PATCH("/:id", nil)  // db.[blogs].UpdateBlog
			blog.DELETE("/:id", nil) // db.[blogs].DeleteBlog
		}
	}

	public := e.Group("/api/public")
	{
		authors := public.Group("/authors")
		{
			authors.GET("", nil)           // db.[users].ListUsersPublic & db.[users].ListUsersPublicCount
			authors.GET("/:username", nil) // db.[users].GetUserPublic
		}

		blogs := public.Group("/blogs")
		{
			blogs.GET("", nil)     // db.[blogs].ListBlogsPublic & db.[blogs].ListBlogsPublicCount
			blogs.GET("/:id", nil) // db.[blogs].GetBlogPublic
		}
	}

	e.Logger.Fatal(e.Start(conf.APIAddr))
}
