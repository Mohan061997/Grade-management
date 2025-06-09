using Microsoft.EntityFrameworkCore;

public class GradeContext : DbContext
{
    public GradeContext(DbContextOptions<GradeContext> options) : base(options) { }

    public DbSet<Grade> Grades { get; set; }
}