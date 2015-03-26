using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortal.WebApi.ViewModels
{
    public class Result
    {
        public Result(int id, Subject subject, double yearMark, double examMark, double finalMark)
        {
            this.Id = id;
            this.Subject = subject;
            this.YearMark = yearMark;
            this.ExamMark = examMark;
            this.FinalMark = finalMark;
        }

        public int Id { get; set; }

        public Subject Subject { get; set; }

        public double YearMark { get; set; }

        public double ExamMark { get; set; }

        public double FinalMark { get; set; }
    }
}