# Buzzfeed-like Quiz 

## Description

Original idea and project layout by Ania Kubów, from youtube channel Code with Ania Kubów. Quiz follows simple logic to ask 3 questions, and give a final result based on answers. 
Followed along with base styles and starter code, and corrected all missing code and bugs I could find and some other code. 

I learned some nuances with using the .removeEventListener() method.
I wasn't able to deactivate the answer blocks, which was resulting in more than one result in the end if you ever clicked on a previous answer. 
I ended up using a code that deleted child nodes being mounted on the DOM, but reconfigured the replaceWith() method from the video. (I may have missed something from the video because it wasn;t working for me)
To solve this problem, I found out about how cloning nodes copies all attributes and values, but NOT event listeners, which solved my biggest problem. 


## Credits

Code with Ania Kubów
https://www.youtube.com/watch?v=7x2Zk1qwBBU
