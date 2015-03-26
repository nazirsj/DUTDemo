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
    public class AcademicRecordController : ApiController
    {
        StudentDataManager dataManager;

        public AcademicRecordController()
        {
            dataManager = StudentDataManager.Instance;
        }

        public HttpResponseMessage GetStudents()
        {
            var result = dataManager.GetStudents();
            return Request.CreateResponse(HttpStatusCode.OK, result, JsonMediaTypeFormatter.DefaultMediaType);
        }

        public HttpResponseMessage GetResults()
        {
            var result = dataManager.GetResults();
            return Request.CreateResponse(HttpStatusCode.OK, result, JsonMediaTypeFormatter.DefaultMediaType);
        }
    }
}
