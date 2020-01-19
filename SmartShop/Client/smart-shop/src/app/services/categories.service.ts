import { phones } from './products.service';
import { Category } from '../models/Category';
import { Injectable } from '@angular/core';

// tmp for test
export const categories: Category[] = [{
  name: 'Smartphones',
  description: 'Smartphones and communicators are different from regular mobile phones by' +
  'having a sufficiently advanced operating system open to third-party software development (conventional mobile phones operating system' +
  'is closed to third-party developers). Installing additional applications can significantly improve the' +
  'functionality of smartphones and smartphones compared to regular mobile phones.'
},
{
  name: 'Accessories',
  description: 'Smartphones and communicators are different from regular mobile phones by' +
  'having a sufficiently advanced operating system open to third-party software development (conventional mobile phones operating system' +
  'is closed to third-party developers). Installing additional applications can significantly improve the' +
  'functionality of smartphones and smartphones compared to regular mobile phones.'
},
{
  name: 'Laptop',
  description: 'A laptop (also laptop computer), often called a notebook, is a small, portable personal computer (PC) with a "clamshell"' +
  'form factor, typically having a thin LCD or LED computer screen mounted on the inside of the upper lid of the clamshell and an' +
  'alphanumeric keyboard on the inside of the lower lid. The clamshell is opened up to use the computer. Laptops are folded' +
  'shut for transportation, and thus are suitable for mobile use.[1] Its name comes from lap, as it was deemed to be placed o' +
  'n a person`s lap when being used. Although originally there was a distinction between laptops and notebooks'  +
  ' (the former being bigger and heavier than the latter), as of 2014, there is often no longer any difference.' +
  'Today, laptops are commonly used in a variety of settings, such as at work, in education, for playing games,' +
  'Internet surfing, for personal multimedia, and general home computer use.'
}];


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategory(): Category[] {
    return categories;
  }

}
