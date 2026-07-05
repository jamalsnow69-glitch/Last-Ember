using LastEmber.Api.Models;

namespace LastEmber.Api.Services;

public interface IAuthService
{
    Task<User?> RegisterAsync(string username, string email, string password);
    Task<string?> LoginAsync(string email, string password);
}