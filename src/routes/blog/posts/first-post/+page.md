---
author: John Doe
title: First Post
description: This a description about somethuing sillz stuff
date: '2023-07-18'
published: true
---

# How to get the size of an iterator?

`size_hint` returns the bounds on the remaining length of the iterator.

Specifically, `size_hint()` returns a tuple where the first element
is the lower bound, and the second element is the upper bound.

## Implementation notes

It is not enforced that an iterator implementation yields the declared
number of elements. A buggy iterator may yield less than the lower bound
or more than the upper bound of elements.

`size_hint()` is primarily intended to be used for optimizations such as
reserving space for the elements of the iterator, but must not be
trusted to e.g., omit bounds checks in unsafe code. An incorrect
implementation of `size_hint()` should not lead to memory safety
violations.

## Examples

Basic usage:

```rust
let a = [1, 2, 3];
let mut iter = a.iter();

assert_eq!((3, Some(3)), iter.size_hint());
let _ = iter.next();
assert_eq!((2, Some(2)), iter.size_hint());
```

A more complex example:

```rs
// The even numbers in the range of zero to nine.
iter = (0..10).filter(|x| x % 2 == 0);

// We might iterate from zero to ten times. Knowing that it's five
// exactly wouldn't be possible without executing filter().!((0, Some(10)), iter.size_hint());
// Let's add five more numbers with chain()
iter = (0..10).filter(|x| x % 2 == 0).chain(15..20);

// both bounds are increased by five

assert_eq!((5, Some(15)), iter.size_hint());
```

Returning `None` for an upper bound:

```
// an infinite iterator has no upper bound
// and the maximum possible lower bound
let iter = 0..;

assert_eq!((usize::MAX, None), iter.size_hint());
```
