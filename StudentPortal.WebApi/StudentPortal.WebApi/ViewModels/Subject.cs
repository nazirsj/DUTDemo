using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortal.WebApi.ViewModels
{
    public class Subject
    {
        public Subject(int id, string code, string name)
        {
            this.Id = id;
            this.Code = code;
            this.Name = name;
        }

        public int Id { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }
    }
}