# Write up: [那篇博客](https://blog.vero.site/post/puzzlehunts) 的谜题

首先通读原文可得知文中隐藏着六组谜题。下面按文章的顺序一一揭开他们。

## 1

> Checking the first letters is always worth it. A lot of puzzles spell out their final answer through first letters of answers to individual clues or something similar. Sometimes, the first letters of the clues might spell out a message as well. These messages often need to be combined with other things in the puzzle that may only appear later. Let’s just say that this mechanism appears a lot. Every time you open a puzzle, you should check if the first letters spell something. Seriously.

我说，检查首字母是对的。

得 ==CASTLES==。


## 2

> Diagonalization is taking the Nth letter of the Nth word or phrase. If you had the answers DESPAIR, WRATH, SCALE, EPIC, MYTHOLOGY, FLAMING, MAGNIFICENT, and PTERODACTYL in that order, you could diagonalize by take the first letter of DESPAIR, the second letter of WRATH, the third letter of SCALE, and so on, and get a thematic word. 

按照指示做提取：
```
DESPAIR
WRATH
SCALE
EPIC
MYTHOLOGY
FLAMING
MAGNIFICENT
PTERODACTYL
```
得 ==DRACONIC==


## 3

> It can be an “answerphrase” that says something like “THE ANSWER IS GO BEFORE”, so you just submit “GO BEFORE”. 

所以，THE ANSWER IS GO BEFORE

得 ==GO BEFORE==

## 4

> A simple cryptic clue I just made up as an example:
> 
> The art house contains dirt (5)

可能是最明显的一个。

Th*e art h*ouse **contains** [dirt]

不出五步必有解药。

得 ==EARTH==。

## 5

> Ciphers also sometimes appear in puzzles. One of the simplest ciphers is the Caesar shift, where letters are shifted forward/backward in the alphabet: for example, a forward shift by 4 would turn A → E, B → F, C → G, and so on, turning the word “LOOP” into the sort-of word “PSST”. This loops around the alphabet, so shifting P by 12 would give you B as follows: P → Q → R → S → T → U → V → W → X → Y → Z → A → B. 

可能是次明显的一个。

PSST → BEEF

得 ==BEEF==


## 6
> Pattern-matching: Some tools let you search for words or phrases by glob patterns (e.g. f*der to find words that start with “f” and end with “der”). Others let you use some variant of regular expressions. Some allow both, or even combining such a pattern with additional constraints (which might be quite useful in this case, since there are a lot of words that start with “f” and end with “der”).
>
> ...
>
> Qat not only supports glob patterns, but also a more complex kind of pattern matching where you can have multiple expressions made from your variables and require that all of them be words. So you can write a query such as AB;AlB;|A|=1;|B|=6, which means “find all seven-letter words where you can insert an l between the first and second letters to get another word”; all such seven-letter words will be in the left column of Qat’s results (at least, assuming your definition of what makes a “word” exactly matches Qat’s dictionary). The site has many more examples that probably explain this better.

综合后不难得到类似`fAder;flAder;|A|=3;`的表达式，去Qat查一下立得：

f·oun·der 	 fl·oun·der 

提交后可以锁定答案：==FOUNDER==

## META
不难看出小题得首字母符合 B-G 的顺序。排序后：

```
BEEF
CASTLES
DRACONIC
EARTH
FOUNDER
GOBEFORE
```
在去掉首字母后（因为其贡献了排序信息），我们重新采用常见提取策略，可以发现对角提取可得 ESCHER (埃舍尔)。

当然可以理解成把首字母当成 Index。

可以，这很有“元”味道。

这就是最终答案。