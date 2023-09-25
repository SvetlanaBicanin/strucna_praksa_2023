using Form.API.Entities;
using MongoDB.Driver;

namespace Form.API.Data
{
    public class FormContext : IFormContext
    {
        public IMongoCollection<ApplicationForm> Forms { get; }

        public FormContext(IConfiguration configuration)
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("FormDB");

            Forms = database.GetCollection<ApplicationForm>("Forms");
        }
    }
}
