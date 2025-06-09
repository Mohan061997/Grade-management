using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class GradesController : ControllerBase
{
    private readonly GradeContext _context;

    public GradesController(GradeContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Grade>>> GetGrades()
    {
        return await _context.Grades.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Grade>> PostGrade(Grade grade)
    {
        _context.Grades.Add(grade);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetGrades), new { id = grade.Id }, grade);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteGrade(int id)
    {
        var grade = await _context.Grades.FindAsync(id);
        if (grade == null) return NotFound();
        _context.Grades.Remove(grade);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}