# Notes

### Common "getElements"
- getElementsByClassName
- getElementsByTagName


getElementById works great for selecting a single instance

### Important: even if you only have one element on the page with a given class name, the `getElementsByClassName()` method will still return this array of elements - it will just be an array with a single item in it.

# Quiz-Review:

1. What are some of the differences between getElementById and getElementsByClassName?
* id - returns a single element/object from the document. class name (tag name) returns an array-like object.
* id - needs an id to find, class name - needs a class to find
document.getElementsByTagName()

2. What will `.getElementsByClassName` return if there are no elements with the matching class in the document?
an empy array

3. What will `.getElementById` return if there is no element with the matching id in the document?
'null' which stands for 'nothing'




