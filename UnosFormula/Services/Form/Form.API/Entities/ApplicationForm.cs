using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace Form.API.Entities
{
    public class ApplicationForm
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Major { get; set; }
        public string Mentor { get; set; }
        public string PhoneNumber { get; set; }
        public string Thesis { get; set; }


    }
}
