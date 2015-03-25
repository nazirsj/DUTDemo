using StudentPortal.WebApi.DataManager;
using StudentPortal.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace StudentPortal.WebApi.Controllers
{
    public class StudentsController : ApiController
    {
        StudentDataManager dataManager;

        public StudentsController()
        {
            dataManager = StudentDataManager.Instance;
        }

        public HttpResponseMessage Get()
        {
            var result = dataManager.GetStudents();
            return Request.CreateResponse(HttpStatusCode.OK, result, JsonMediaTypeFormatter.DefaultMediaType);
        }

        public HttpResponseMessage Get(int id)
        {
            var result = dataManager.GetStudents().Where(x => x.StudentNumber >= id).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, result, JsonMediaTypeFormatter.DefaultMediaType);
        }
    }
}
