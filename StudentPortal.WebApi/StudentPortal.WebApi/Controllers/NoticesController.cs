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
    public class NoticesController : ApiController
    {
        StudentDataManager dataManager;

        public NoticesController()
        {
            dataManager = StudentDataManager.Instance;
        }

        public HttpResponseMessage Get()
        {
            var result = dataManager.GetNotices();
            return Request.CreateResponse(HttpStatusCode.OK, result, JsonMediaTypeFormatter.DefaultMediaType);
        }

        public HttpResponseMessage Get(int id)
        {
            var result = dataManager.GetNotices().Where(x => x.Id == id).FirstOrDefault();
            return Request.CreateResponse(HttpStatusCode.OK, result, JsonMediaTypeFormatter.DefaultMediaType);
        }

        public void Post(Notice notice)
        {
            dataManager.AddNotice(notice);
        }

        public void Delete(int id)
        {
            dataManager.DeleteNotice(id);

        }

    }
}
