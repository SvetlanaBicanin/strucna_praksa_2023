using Form.API.Entities;

namespace Form.API.Repositories
{
    public interface IFormRepository
    {
        Task<IEnumerable<ApplicationForm>> GetForms();

        Task CreateForm(ApplicationForm form);

        Task<bool> DeleteForm(string id);
    }
}
