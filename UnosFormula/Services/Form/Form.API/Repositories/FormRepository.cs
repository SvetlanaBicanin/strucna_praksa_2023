using Form.API.Data;
using Form.API.Entities;
using MongoDB.Driver;

namespace Form.API.Repositories
{
    public class FormRepository : IFormRepository
    {
        private readonly IFormContext _context;

        public FormRepository(IFormContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<ApplicationForm>> GetForms()
        {
            return await _context.Forms.Find(p => true).ToListAsync();
        }


        public async Task CreateForm(ApplicationForm form)
        {
            await _context.Forms.InsertOneAsync(form);

        }


        public async Task<bool> DeleteForm(string id)
        {
            var deleteResult = await _context.Forms.DeleteOneAsync(p => p.Id == id);
            return deleteResult.IsAcknowledged && deleteResult.DeletedCount > 0;
        }
    }
}
