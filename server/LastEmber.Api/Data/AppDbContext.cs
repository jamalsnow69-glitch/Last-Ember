using Microsoft.EntityFrameworkCore;
using LastEmber.Api.Models;

namespace LastEmber.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    
    public DbSet<User> Users => Set<User>();
    public DbSet<GameState> GameStates => Set<GameState>();
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();
            
        modelBuilder.Entity<User>()
            .HasIndex(u => u.Username)
            .IsUnique();
            
        modelBuilder.Entity<GameState>()
            .HasOne(gs => gs.User)
            .WithOne(u => u.GameState)
            .HasForeignKey<GameState>(gs => gs.UserId);
    }
}