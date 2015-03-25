using StudentPortal.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortal.WebApi.DataManager
{
    public class StudentDataManager
    {
        private static StudentDataManager instance;

        public static StudentDataManager Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new StudentDataManager();
                }
                return instance;
            }
        }

        private List<Notice> notices;

        public IEnumerable<Notice> GetNotices()
        {
            return Notices;
        }


        public IEnumerable<Notice> Notices
        {
            get
            {
                if (notices == null)
                {
                    notices = new List<Notice>();
                    notices.Add(new Notice(1,"Advanced Software Development 3","Practical test in lab DUT04.", new DateTime(2015,05,04,09,00,00)));
                    notices.Add(new Notice(2,"Networks 2","Theory test in lecture hall DUT03.", new DateTime(2015,06,01,13,00,00)));
                    notices.Add(new Notice(3,"Database Development 1","Theory test in lecture hall DUT03.", new DateTime(2015,06,05,15,00,00)));
                }
                return notices;
            }
        }


        public IEnumerable<Student> GetStudents()
        {
            var tim = GetTim;
            var sally = GetSally;
            var bob = GetBob;
            return new List<Student>() { tim, sally, bob };
        }


        public Student GetTim { get { return new Student(1, "Tim", "Blue", 201501, "BSc: Information Systems", "First", "http://studentportalwebapi.azurewebsites.net/resources/images/tim.jpg"); } }

        public Student GetSally { get { return new Student(2, "Sally", "Green", 201502, "BSc: Computer Systems Engineering", "Second", "http://studentportalwebapi.azurewebsites.net/resources/images/sally.jpg"); } }

        public Student GetBob { get { return new Student(3, "Bob", "Yellow", 201503, "BSc:  Computer Science", "Third", "http://studentportalwebapi.azurewebsites.net/resources/images/bob.jpg"); } }


        public IEnumerable<StudentResults> GetResults()
        {
            var tim = GetTim;
            var sally = GetSally;
            var bob = GetBob;

            var dev401i = new Subject(1, "DEV401I", "Advanced Development Software 4");
            var ntw401i = new Subject(2, "NTW401I", "Networks 4");
            var ops401i = new Subject(3, "OPS401I", "Operating Systems 4");
            var rit4801 = new Subject(4, "RIT4801", "RESEARCH IN IT");

            var timResults = new StudentResults(tim)
            {
                Results = new List<Result>()
                {
                    new Result(1,dev401i,60,70,67),
                    new Result(2,ntw401i,80,90,87),
                    new Result(3,ops401i,95,98,97),
                    new Result(4,rit4801,80,80,80)
                }
            };
            var sallyResults = new StudentResults(sally)
            {
                Results = new List<Result>()
                {
                    new Result(1,dev401i,60,70,67),
                    new Result(2,ntw401i,80,90,87),
                    new Result(3,ops401i,95,98,97),
                    new Result(4,rit4801,80,80,80)
                }
            };

            var bobResults = new StudentResults(bob)
            {
                Results = new List<Result>()
                {
                    new Result(1,dev401i,60,70,67),
                    new Result(2,ntw401i,80,90,87),
                    new Result(3,ops401i,95,98,97),
                    new Result(4,rit4801,80,80,80)
                }
            };


            return new List<StudentResults>() { timResults, sallyResults, bobResults };
        }

        internal void AddNotice(Notice notice)
        {
            throw new NotImplementedException();
        }

        internal void DeleteNotice(int id)
        {
            throw new NotImplementedException();
        }
    }
}
