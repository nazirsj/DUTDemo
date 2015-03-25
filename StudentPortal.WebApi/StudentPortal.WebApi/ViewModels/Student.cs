using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortal.WebApi.ViewModels
{
    public class Student
    {
        public Student(int id, string name, string surname, int studentNumber, string course, string year, string avatarURL)
        {
            this.Id = id;
            this.Name = name;
            this.Surname = surname;
            this.StudentNumber = studentNumber;
            this.AvatarURL = avatarURL;
            this.Course = course;
            this.Year = year;
        }

        public int Id { get; set; }

        public string AvatarURL { get; set; }

        public string Name{ get; set; }

        public string Surname { get; set; }

        public int StudentNumber { get; set; }

        public string Course { get; set; }

        public string Year { get; set; }

    }
}