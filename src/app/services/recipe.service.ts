import { IRecipe } from '../interface/recipe.interface';
import { Recipe } from '../models/recipe.model';
import { Subject } from 'rxjs';


export class SRecipeService
{

    recipes: IRecipe[] = [
        new Recipe('12 No-Maintenance Dump Dinners', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F09%2F11%2F482077.jpg&w=640&h=428&c=sc&poi=face&q=85', 'Chicken breasts with condensed cream of Cheddar cheese soup, milk, and spices melds into a tender and flavorful dish. "The trick is to not lift the lid while cooking," says Chris Mueller. Enjoy it with microwave-steamed broccoli and your choice of rice, potatoes, or pasta.'),
        new Recipe('Autumn Harvest Cookies', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F132423.jpg&w=1200&h=678&c=sc&poi=face&q=85', 'In a separate bowl, combine the flour, salt, baking powder and pumpkin pie spice; stir flour mixture into the sugar mixture. Add the rolled oats, walnuts and cranberries and mix thoroughly. Using a small ice cream scoop or teaspoon, drop rounded scoops of dough onto the prepared cookie sheet.')
    ];

    constructor()
    {}

    getRecipes()
    {
        return this.recipes.slice();
    }

    AddRecipe( recipe: IRecipe )
    {
        this.recipes.push(recipe);
    }
}