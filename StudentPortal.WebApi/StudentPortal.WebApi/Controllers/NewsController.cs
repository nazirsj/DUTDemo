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
    public class NewsController : ApiController
    {
        StudentDataManager dataManager;

        public NewsController()
        {
            dataManager = StudentDataManager.Instance;
        }

        public HttpResponseMessage Get()
        {
            var result = dataManager.GetNews();
            return Request.CreateResponse(HttpStatusCode.OK, result, JsonMediaTypeFormatter.DefaultMediaType);
        }
    }
}
