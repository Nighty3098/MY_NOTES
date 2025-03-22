---
tags:
  - LeetCode
---
# Task

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P    A   H   N
A P L S I I G
Y   I   R

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

**Example 1:**

**Input:** s = "PAYPALISHIRING", numRows = 3
**Output:** "PAHNAPLSIIGYIR"

**Example 2:**

**Input:** s = "PAYPALISHIRING", numRows = 4
**Output:** "PINALSIGYAHRPI"
**Explanation:**
P     I    N
A   L S  I G
Y A   H R
P     I

**Example 3:**

**Input:** s = "A", numRows = 1
**Output:** "A"

**Constraints:**

- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
- `1 <= numRows <= 1000`

# Solution 

```cpp

class Solution {
public:
    string convert(string s, int numRows) {
        if(s.size() <= 2 || numRows == 1) return s;

        string ans = "";
        int diff = numRows * 2 - 2;
        int j = 0;
        while(j < s.size()) {
            ans += s[j];
            j += diff;
        }
        for(int i = 1; i < numRows - 1; ++i) {
            j = i;
            int k = 0;
            while(j < s.size()) {
                ans += s[j];
                int jump = (numRows - i) * 2 - 2;
                if(k % 2 == 0) {
                    j += jump;
                }
                else j += diff - jump;
                ++k;
            }   
        }
        j = numRows - 1;
        while(j < s.size()) {
            ans += s[j];
            j += diff;
        }

        return ans;
    }
};

```