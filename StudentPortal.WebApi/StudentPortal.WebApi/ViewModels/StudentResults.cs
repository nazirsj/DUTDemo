using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortal.WebApi.ViewModels
{
    public class StudentResults
    {
        public StudentResults(Student student)
        {
            this.Student = student;
            Results = new List<Result>();
        }

        public Student Student { get; set; }

        public IEnumerable<Result> Results { get; set; }
    }
}