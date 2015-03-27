using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortal.WebApi.ViewModels
{
    public class Notice
    {
        public Notice()
	    {

	    }
        public Notice(int id, string title, string description, DateTime date)
        {
            this.Id = id;
            this.Title = title;
            this.Description = description;
            this.Date = date;
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

    }
}