using StudentPortal.WebApi.DataManager;
using StudentPortal.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortal.WebApi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Notices()
        {
            var notices = StudentDataManager.Instance.GetNotices();
            return View(notices);
        }

        public ActionResult AddNotice()
        {
            var notice = new Notice();
            return View(notice);
        }

        [HttpPost]
        public ActionResult AddNotice(Notice notice)
        {
            StudentDataManager.Instance.AddNotice(notice);
            return RedirectToAction("Notices");
        }


        public ActionResult DeleteNotice(int id)
        {
            var notice = StudentDataManager.Instance.GetNotices().Where(x => x.Id == id).FirstOrDefault();
            return View(notice);
        }

        [HttpPost]
        public ActionResult DeleteNotice(Notice notice)
        {
            StudentDataManager.Instance.DeleteNotice(notice.Id);
            return RedirectToAction("Notices");
        }

    }
}
