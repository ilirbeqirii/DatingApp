using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Like> Likes { get; set; }
        public DbSet<Message> Messages {get; set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Like>()
                .HasKey(c => new { c.LikerId, c.LikeeId});
            
            builder.Entity<Like>()
                .HasOne(c => c.Likee)
                .WithMany(c => c.Likers)
                .HasForeignKey(c => c.LikeeId)
                .OnDelete(DeleteBehavior.Restrict);

             builder.Entity<Like>()
                .HasOne(c => c.Liker)
                .WithMany(c => c.Likees)
                .HasForeignKey(c => c.LikerId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Message>()
                .HasOne(c => c.Sender)
                .WithMany(c => c.MessagesSent)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Message>()
                .HasOne(c => c.Recipient)
                .WithMany(c => c.MessagesReceived)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}