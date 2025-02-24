using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ControleeContatos.Migrations
{
    /// <inheritdoc />
    public partial class AtualizacaoModelContato : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Contato",
                table: "Contatos",
                newName: "Celular");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Celular",
                table: "Contatos",
                newName: "Contato");
        }
    }
}
