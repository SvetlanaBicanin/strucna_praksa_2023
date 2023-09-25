using Form.API.Entities;
using Form.API.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Form.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class FormController : ControllerBase
    {
        //kontroleri nikako ne smeju da znaju kako se tacno podaci obradjuju,
        //on je na apstraktnijem nivou i ne sme da zavisi od toga koju bazu koristimo i kako joj pristupamo

        //patern koji cu koristiti : Repository pattern

        // predstavlja sloj medijator (sloj izmedju) logike domena(kontrolera) i sloja podataka (niski sloj podataka)

        private readonly IFormRepository _repository;

        public FormController(IFormRepository repository)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<ApplicationForm>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<ApplicationForm>>> GetForms()
        {
            var forms = await _repository.GetForms();
            return Ok(forms);
        }

        [HttpPost]
        [ProducesResponseType(typeof(IEnumerable<ApplicationForm>), StatusCodes.Status201Created)]
        public async Task<ActionResult<ApplicationForm>> CreateProduct([FromBody] ApplicationForm form)
        {
            await _repository.CreateForm(form);

            return CreatedAtRoute("GetForm", new { id = form.Id }, form);
        }

        [HttpDelete("{id:length(24)}", Name = "DeleteForm")]
        [ProducesResponseType(typeof(ApplicationForm), StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteProductById(string id)
        {
            return Ok(await _repository.DeleteForm(id));
        }



    }
}
