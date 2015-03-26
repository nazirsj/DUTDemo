using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortal.WebApi.ViewModels
{
    public class News
    {
        public News(int id, string url, string description)
        {
            this.Id = id;
            this.ContentURL = url;
            this.Description = description;
        }

        public int Id { get; set; }

        public string ContentURL { get; set; }

        public string Description { get; set; }
    }
}