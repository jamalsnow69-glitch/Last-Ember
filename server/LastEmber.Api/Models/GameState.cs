using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LastEmber.Api.Models;

public class GameState
{
    [Key]
    public int Id { get; set; }
    
    public int UserId { get; set; }
    
    [ForeignKey(nameof(UserId))]
    public User? User { get; set; }
    
    [Column(TypeName = "nvarchar(max)")]
    public string ResourcesJson { get; set; } = "{}";
    
    [Column(TypeName = "nvarchar(max)")]
    public string StatsJson { get; set; } = "{}";
    
    [Column(TypeName = "nvarchar(max)")]
    public string UpgradesJson { get; set; } = "[]";
    
    [Column(TypeName = "nvarchar(max)")]
    public string InventoryJson { get; set; } = "[]";
    
    [Column(TypeName = "nvarchar(max)")]
    public string QuestsJson { get; set; } = "{}";
    
    [Column(TypeName = "nvarchar(max)")]
    public string StoryFlagsJson { get; set; } = "{}";
    
    [Column(TypeName = "nvarchar(max)")]
    public string FactionRepJson { get; set; } = "{}";
    
    public string? FactionMembership { get; set; }
    
    public int StoryChapterIndex { get; set; }
    
    public bool PostGame { get; set; }
    
    public int TotalDaysSurvived { get; set; }
    
    public DateTime LastSaved { get; set; } = DateTime.UtcNow;
}