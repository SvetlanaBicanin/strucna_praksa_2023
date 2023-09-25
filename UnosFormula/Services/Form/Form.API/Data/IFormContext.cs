using Form.API.Entities;
using MongoDB.Driver;

namespace Form.API.Data
{
    public interface IFormContext
    {
        IMongoCollection<ApplicationForm> Forms { get; }
    }
}
