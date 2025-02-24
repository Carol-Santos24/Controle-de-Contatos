using ControleeContatos.Filters;
using Microsoft.AspNetCore.Mvc;

namespace ControleeContatos.Controllers
{
    public class RestritoController : Controller
    {
        [PaginaParaUsuarioLogado]
        public IActionResult Index()
        {
            return View();
        }
    }
}
