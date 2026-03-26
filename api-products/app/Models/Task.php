<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;

    public function run(): void
    {
        // Crea 10 usuarios falsos
        Task::factory()->count(10)->create();
    }

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
