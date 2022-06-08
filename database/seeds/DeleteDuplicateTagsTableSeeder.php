<?php

use Illuminate\Database\Seeder;
use App\Tag;

class DeleteDuplicateTagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $allTag = Tag::all();
        $tags = [];

        foreach($allTag as $tag){
            if (in_array($tag->name, $tags)){
                $tag->delete();
            }else {
                $tags[] = $tag->name;
            }
        }
    }
}
