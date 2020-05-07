﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Repository.Context;
using Repository.IRepository;
using Repository.RepositoryIMPL;

namespace BookStoreWebAPI
{
    public class Startup
    {
        private readonly IConfiguration _config;

        /// <summary>
        /// injecting IConfiguration through constructor
        /// </summary>
        /// <param name="configuration"></param>
        public Startup(IConfiguration configuration)
        {
            _config = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<UserDBContext>(
               option => option.UseSqlServer(
                   this._config.GetConnectionString("UserDbConnection"),
                   sqlServerOptions => sqlServerOptions.MigrationsAssembly("Repository")));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddTransient<IBookRepo, BookRepoIMPL>();

            ILoggerFactory loggerFactory = new LoggerFactory();
            loggerFactory.AddDebug();
            services.AddSingleton<ILoggerFactory>(loggerFactory);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
