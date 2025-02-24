using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace ControleeContatos.Models
{
    public class ContatoModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Digite o nome do contato")] 
        public string Nome { get; set; }

        [Required(ErrorMessage = "Digite o email do contato")]
        [EmailAddress(ErrorMessage ="O email digitado não é valido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Digite o celular do contato")]
        [Phone(ErrorMessage ="O celular informado não é valido")]
        public string Celular { get; set; }
        public int? UsuarioId { get; set; }
        public UsuarioModel? Usuario { get; set; }  // Permite que fique nulo

    }
}
