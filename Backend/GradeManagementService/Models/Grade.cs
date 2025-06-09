using System.ComponentModel.DataAnnotations;

public class Grade
{
    public int Id { get; set; }
    
    [Required]
    public string? StudentName { get; set; } 
     
    [Required]
    public string? Course { get; set; }       
    
    public int Score { get; set; }
}