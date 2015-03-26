using StudentPortal.WebApi.DataManager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace StudentPortal.WebApi.Controllers
{
    public class ResultsController : ApiController
    {
        StudentDataManager dataManager;

        public ResultsController()
        {
            dataManager = StudentDataManager.Instance;
        }

        public HttpResponseMessage Get()
        {
            var result = dataManager.GetResults();
            return Request.CreateResponse(HttpStatusCode.OK, result, JsonMediaTypeFormatter.DefaultMediaType);
        }

        public HttpResponseMessage Get(int id)
        {
            var result = dataManager.GetResults().Where(x => x.Student.StudentNumber == id).FirstOrDefault();
            return Request.CreateResponse(HttpStatusCode.OK, result, JsonMediaTypeFormatter.DefaultMediaType);
        }
    }
}
