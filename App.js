
import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "PHASE 1",
    subtitle: "Solidify the Foundation",
    duration: "Weeks 1–4",
    color: "#00ff9d",
    status: "start",
    topics: [
      {
        name: "Arrays & Strings (Deep)",
        weeks: "Week 1–2",
        why: "You know the basics but aren't confident — this phase builds iron-clad understanding.",
        concepts: ["Two Pointers", "Sliding Window", "Prefix Sum", "Kadane's Algorithm", "String manipulation"],
        problems: [
          { name: "Two Sum", diff: "Easy", link: "https://leetcode.com/problems/two-sum/" },
          { name: "Best Time to Buy & Sell Stock", diff: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
          { name: "Longest Substring Without Repeating", diff: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
          { name: "Maximum Subarray (Kadane)", diff: "Medium", link: "https://leetcode.com/problems/maximum-subarray/" },
          { name: "Product of Array Except Self", diff: "Medium", link: "https://leetcode.com/problems/product-of-array-except-self/" },
          { name: "Container With Most Water", diff: "Medium", link: "https://leetcode.com/problems/container-with-most-water/" },
        ],
        tip: "🔑 For every problem: first solve brute force, then optimize. Never jump to optimal directly.",
        daily: "45 min concept → 45 min solve 1 problem → 10 min review solution",
      },
      {
        name: "Hashing & Maps",
        weeks: "Week 3",
        why: "unordered_map is your best friend in C++. 80% of array problems become trivial with hashing.",
        concepts: ["unordered_map", "unordered_set", "Frequency counting", "Anagram detection", "Subarray sum with hash"],
        problems: [
          { name: "Valid Anagram", diff: "Easy", link: "https://leetcode.com/problems/valid-anagram/" },
          { name: "Group Anagrams", diff: "Medium", link: "https://leetcode.com/problems/group-anagrams/" },
          { name: "Subarray Sum Equals K", diff: "Medium", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
          { name: "Top K Frequent Elements", diff: "Medium", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
        ],
        tip: "🔑 Practice writing unordered_map from scratch. Know time complexity: O(1) avg insert/lookup.",
        daily: "30 min theory → 60 min problems → 10 min complexity analysis",
      },
      {
        name: "Sorting & Searching",
        weeks: "Week 4",
        why: "Binary Search is tested in EVERY interview. Master it fully.",
        concepts: ["Binary Search (classic + variants)", "Merge Sort", "Quick Sort", "Sort + Two Pointer combos"],
        problems: [
          { name: "Binary Search", diff: "Easy", link: "https://leetcode.com/problems/binary-search/" },
          { name: "Search in Rotated Sorted Array", diff: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
          { name: "Find Minimum in Rotated Sorted Array", diff: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
          { name: "Kth Largest Element", diff: "Medium", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        ],
        tip: "🔑 Binary Search isn't just for sorted arrays — it works on any monotonic condition. Think broadly.",
        daily: "Implement Merge Sort + Quick Sort in C++ from memory. Then solve problems.",
      },
    ],
    milestone: "✅ Solve 25+ problems. Comfortable with 2-pointer, sliding window, binary search, hashing.",
  },
  {
    id: 2,
    title: "PHASE 2",
    subtitle: "Linear Data Structures",
    duration: "Weeks 5–8",
    color: "#00c8ff",
    status: "upcoming",
    topics: [
      {
        name: "Linked Lists",
        weeks: "Week 5–6",
        why: "Tests pointer manipulation and in-place thinking — common in Google/Amazon interviews.",
        concepts: ["Singly & Doubly LL", "Fast & Slow pointers", "Reverse", "Merge", "Cycle detection (Floyd's)"],
        problems: [
          { name: "Reverse Linked List", diff: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/" },
          { name: "Linked List Cycle", diff: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/" },
          { name: "Merge Two Sorted Lists", diff: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
          { name: "Remove Nth Node From End", diff: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
          { name: "LRU Cache", diff: "Hard", link: "https://leetcode.com/problems/lru-cache/" },
        ],
        tip: "🔑 Always draw the pointers on paper before coding. Pointer bugs are invisible without diagrams.",
        daily: "Implement LL class in C++ → then solve problems",
      },
      {
        name: "Stacks & Queues",
        weeks: "Week 7",
        why: "Monotonic stack is one of the most underrated patterns — appears in 20%+ of medium problems.",
        concepts: ["Stack (LIFO)", "Queue (FIFO)", "Monotonic Stack", "Deque", "Next Greater Element pattern"],
        problems: [
          { name: "Valid Parentheses", diff: "Easy", link: "https://leetcode.com/problems/valid-parentheses/" },
          { name: "Daily Temperatures", diff: "Medium", link: "https://leetcode.com/problems/daily-temperatures/" },
          { name: "Largest Rectangle in Histogram", diff: "Hard", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
          { name: "Sliding Window Maximum", diff: "Hard", link: "https://leetcode.com/problems/sliding-window-maximum/" },
        ],
        tip: "🔑 Monotonic stack = when you see 'next greater/smaller element' — immediately think stack.",
        daily: "60 min problems + 30 min pattern recognition",
      },
      {
        name: "Recursion & Backtracking",
        weeks: "Week 8",
        why: "The mental model for Trees, Graphs, DP. You CANNOT skip this.",
        concepts: ["Recursion tree visualization", "Base cases", "Backtracking template", "Subsets, Permutations, Combinations"],
        problems: [
          { name: "Subsets", diff: "Medium", link: "https://leetcode.com/problems/subsets/" },
          { name: "Permutations", diff: "Medium", link: "https://leetcode.com/problems/permutations/" },
          { name: "Combination Sum", diff: "Medium", link: "https://leetcode.com/problems/combination-sum/" },
          { name: "Word Search", diff: "Medium", link: "https://leetcode.com/problems/word-search/" },
          { name: "N-Queens", diff: "Hard", link: "https://leetcode.com/problems/n-queens/" },
        ],
        tip: "🔑 Draw the recursion tree for EVERY backtracking problem. It becomes pattern recognition.",
        daily: "Draw tree first (15 min) → code (45 min) → optimize (30 min)",
      },
    ],
    milestone: "✅ Implement LL/Stack/Queue from scratch. Solve 30+ problems. Backtracking template memorized.",
  },
  {
    id: 3,
    title: "PHASE 3",
    subtitle: "Trees & Graphs",
    duration: "Weeks 9–14",
    color: "#ffb800",
    status: "upcoming",
    topics: [
      {
        name: "Binary Trees",
        weeks: "Week 9–10",
        why: "Trees appear in 30%+ of FAANG interviews. This is the single most important topic.",
        concepts: ["DFS (Pre/In/Post order)", "BFS (Level order)", "Height/Depth", "Diameter", "LCA"],
        problems: [
          { name: "Invert Binary Tree", diff: "Easy", link: "https://leetcode.com/problems/invert-binary-tree/" },
          { name: "Maximum Depth of Binary Tree", diff: "Easy", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
          { name: "Level Order Traversal", diff: "Medium", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
          { name: "Lowest Common Ancestor", diff: "Medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
          { name: "Binary Tree Maximum Path Sum", diff: "Hard", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
        ],
        tip: "🔑 95% of tree problems = DFS with a return value. Master this one pattern deeply.",
        daily: "Implement BST from scratch → BFS/DFS from scratch → then problems",
      },
      {
        name: "BST & Heaps",
        weeks: "Week 11",
        why: "BST properties + priority_queue in C++ are heavily tested in system design adjacent problems.",
        concepts: ["BST insert/delete/search", "Inorder = sorted", "priority_queue (min/max heap)", "Top K pattern"],
        problems: [
          { name: "Validate BST", diff: "Medium", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
          { name: "Kth Smallest in BST", diff: "Medium", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
          { name: "Find Median from Data Stream", diff: "Hard", link: "https://leetcode.com/problems/find-median-from-data-stream/" },
        ],
        tip: "🔑 Know priority_queue<int, vector<int>, greater<int>> for min-heap in C++ cold.",
        daily: "Implement heap from scratch once. Then focus on problems.",
      },
      {
        name: "Graphs",
        weeks: "Week 12–13",
        why: "Graph problems feel hard but they're all BFS/DFS + a twist. The twist is the skill.",
        concepts: ["Adjacency list/matrix", "BFS (shortest path)", "DFS (connectivity)", "Topological Sort", "Union-Find"],
        problems: [
          { name: "Number of Islands", diff: "Medium", link: "https://leetcode.com/problems/number-of-islands/" },
          { name: "Clone Graph", diff: "Medium", link: "https://leetcode.com/problems/clone-graph/" },
          { name: "Course Schedule (Topo Sort)", diff: "Medium", link: "https://leetcode.com/problems/course-schedule/" },
          { name: "Word Ladder", diff: "Hard", link: "https://leetcode.com/problems/word-ladder/" },
          { name: "Pacific Atlantic Water Flow", diff: "Medium", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
        ],
        tip: "🔑 For graphs: always ask — directed/undirected? weighted? cyclic? This determines your algorithm.",
        daily: "Implement BFS + DFS on graph from scratch every week until automatic",
      },
      {
        name: "Tries",
        weeks: "Week 14",
        why: "Lightweight but high-signal topic. Appears in string-heavy companies like Google.",
        concepts: ["Trie insert/search/startsWith", "Word Dictionary", "Auto-complete"],
        problems: [
          { name: "Implement Trie", diff: "Medium", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
          { name: "Word Search II", diff: "Hard", link: "https://leetcode.com/problems/word-search-ii/" },
        ],
        tip: "🔑 Implement Trie from memory in C++ — it's often asked directly as a problem.",
        daily: "1 day implement → 3 days problems",
      },
    ],
    milestone: "✅ Implement Tree/Graph traversals blindfolded. Solve 40+ problems. Union-Find template ready.",
  },
  {
    id: 4,
    title: "PHASE 4",
    subtitle: "Dynamic Programming",
    duration: "Weeks 15–20",
    color: "#ff4f7b",
    status: "upcoming",
    topics: [
      {
        name: "DP Foundations",
        weeks: "Week 15–16",
        why: "DP is the #1 differentiator between good and great candidates at top MNCs.",
        concepts: ["Memoization (top-down)", "Tabulation (bottom-up)", "State definition", "Transition relation", "1D DP problems"],
        problems: [
          { name: "Climbing Stairs", diff: "Easy", link: "https://leetcode.com/problems/climbing-stairs/" },
          { name: "House Robber", diff: "Medium", link: "https://leetcode.com/problems/house-robber/" },
          { name: "Longest Increasing Subsequence", diff: "Medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
          { name: "Coin Change", diff: "Medium", link: "https://leetcode.com/problems/coin-change/" },
          { name: "Decode Ways", diff: "Medium", link: "https://leetcode.com/problems/decode-ways/" },
        ],
        tip: "🔑 ALWAYS define dp[i] in plain English before writing code. 'dp[i] = minimum coins to make amount i'",
        daily: "Solve recursion → memoize → tabulate. Every. Single. Problem.",
      },
      {
        name: "2D DP & Sequences",
        weeks: "Week 17–18",
        why: "2D DP is where most people give up. Mastering it separates FAANG candidates from the rest.",
        concepts: ["Grid DP", "Knapsack (0/1)", "LCS", "Edit Distance", "Partition DP"],
        problems: [
          { name: "Unique Paths", diff: "Medium", link: "https://leetcode.com/problems/unique-paths/" },
          { name: "Longest Common Subsequence", diff: "Medium", link: "https://leetcode.com/problems/longest-common-subsequence/" },
          { name: "Edit Distance", diff: "Hard", link: "https://leetcode.com/problems/edit-distance/" },
          { name: "0/1 Knapsack", diff: "Medium", link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" },
          { name: "Burst Balloons", diff: "Hard", link: "https://leetcode.com/problems/burst-balloons/" },
        ],
        tip: "🔑 Draw the DP table on paper for 2D problems. Fill it manually for small inputs first.",
        daily: "1 problem/day max. Go deep, not wide.",
      },
      {
        name: "Advanced DP Patterns",
        weeks: "Week 19–20",
        why: "These patterns appear repeatedly. Recognizing them instantly is the real skill.",
        concepts: ["DP on Trees", "DP on Intervals", "Bitmask DP", "State machine DP"],
        problems: [
          { name: "Palindromic Substrings", diff: "Medium", link: "https://leetcode.com/problems/palindromic-substrings/" },
          { name: "Regular Expression Matching", diff: "Hard", link: "https://leetcode.com/problems/regular-expression-matching/" },
          { name: "Best Time to Buy/Sell Stock III", diff: "Hard", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/" },
        ],
        tip: "🔑 After solving, always ask: what's the pattern? Name it. Build a personal pattern library.",
        daily: "Pattern recognition drills: solve → categorize → review similar",
      },
    ],
    milestone: "✅ Solve 40+ DP problems. Can identify DP vs Greedy. Can define state + transition for new problems.",
  },
  {
    id: 5,
    title: "PHASE 5",
    subtitle: "Advanced & Interview Prep",
    duration: "Weeks 21–26",
    color: "#bf7fff",
    status: "upcoming",
    topics: [
      {
        name: "Greedy Algorithms",
        weeks: "Week 21",
        why: "Greedy is counterintuitive — you need to prove WHY greedy works, not just that it does.",
        concepts: ["Activity selection", "Interval scheduling", "Huffman", "Proof by exchange argument"],
        problems: [
          { name: "Jump Game", diff: "Medium", link: "https://leetcode.com/problems/jump-game/" },
          { name: "Merge Intervals", diff: "Medium", link: "https://leetcode.com/problems/merge-intervals/" },
          { name: "Gas Station", diff: "Medium", link: "https://leetcode.com/problems/gas-station/" },
        ],
        tip: "🔑 Always ask: 'Can I prove a greedy choice doesn't hurt future decisions?' If yes → greedy works.",
        daily: "Solve + write 2-line proof of why greedy is correct",
      },
      {
        name: "Advanced Graphs",
        weeks: "Week 22–23",
        why: "Dijkstra + Bellman-Ford appear in senior roles and SDE-2+ interviews.",
        concepts: ["Dijkstra's algorithm", "Bellman-Ford", "Floyd-Warshall", "MST (Kruskal/Prim)", "Bridges & Articulation Points"],
        problems: [
          { name: "Network Delay Time (Dijkstra)", diff: "Medium", link: "https://leetcode.com/problems/network-delay-time/" },
          { name: "Cheapest Flights K Stops", diff: "Medium", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
          { name: "Min Cost to Connect Points (MST)", diff: "Medium", link: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
        ],
        tip: "🔑 Implement Dijkstra with priority_queue in C++ until it's muscle memory.",
        daily: "Implement from scratch daily for 1 week straight",
      },
      {
        name: "Mock Interviews & Revision",
        weeks: "Week 24–26",
        why: "Knowing DSA ≠ performing in interviews. This phase builds execution under pressure.",
        concepts: ["Timed problem solving (45 min)", "Thinking out loud", "Edge case checklist", "Space-time tradeoff discussion"],
        problems: [
          { name: "LeetCode Weekly Contests", diff: "Mixed", link: "https://leetcode.com/contest/" },
          { name: "Blind 75 remaining problems", diff: "Mixed", link: "https://neetcode.io/practice" },
          { name: "NeetCode 150 review", diff: "Mixed", link: "https://neetcode.io/practice" },
        ],
        tip: "🔑 Do 3 mock interviews/week. Record yourself. Watch it back. Cringe = growth.",
        daily: "1 timed problem (45 min hard cap) + 1 mock interview/week",
      },
    ],
    milestone: "✅ 200+ problems solved. Can solve medium in 20 min. Hard in 40 min. Mock interview ready.",
  },
];

const diffColor = { Easy: "#00ff9d", Medium: "#ffb800", Hard: "#ff4f7b" };

const weeklySchedule = [
  { day: "Mon", activity: "Learn new concept (theory + implementation in C++)", icon: "📖" },
  { day: "Tue", activity: "Solve 1 Easy or Medium problem — brute force first", icon: "🔨" },
  { day: "Wed", activity: "Solve 1 Medium — optimize from yesterday's approach", icon: "⚡" },
  { day: "Thu", activity: "Revisit yesterday's problem + learn optimal solution pattern", icon: "🔄" },
  { day: "Fri", activity: "Solve 1 new problem cold (no hints, 45-min timer)", icon: "🎯" },
  { day: "Sat", activity: "Revision: re-solve 3 problems from the week from memory", icon: "🧠" },
  { day: "Sun", activity: "Rest OR LeetCode weekly contest (optional)", icon: "🏆" },
];

const cppTips = [
  { tip: "Use auto& in range-for loops", code: "for(auto& x : vec)" },
  { tip: "Min-heap with priority_queue", code: "priority_queue<int,vector<int>,greater<int>>" },
  { tip: "Sort descending", code: "sort(v.begin(),v.end(),greater<int>())" },
  { tip: "Unordered map O(1) avg", code: "unordered_map<int,int> mp;" },
  { tip: "Infinity constant", code: "int INF = INT_MAX;" },
  { tip: "Pair in map", code: "map<int,pair<int,int>> mp;" },
];

export default function DSARoadmap() {
  const [activePhase, setActivePhase] = useState(1);
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeTab, setActiveTab] = useState("roadmap");

  const phase = phases[activePhase - 1];
  const topic = phase.topics[activeTopic];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080c14",
      color: "#e8eaf0",
      fontFamily: "'IBM Plex Mono', monospace",
      padding: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0d1220; }
        ::-webkit-scrollbar-thumb { background: #1e2a3a; border-radius: 2px; }
        .phase-btn:hover { transform: translateY(-2px); transition: all 0.2s; }
        .topic-btn:hover { background: rgba(255,255,255,0.05) !important; }
        .prob-row:hover { background: rgba(255,255,255,0.04) !important; cursor: pointer; }
        .tab-btn:hover { opacity: 0.9; }
        @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
        @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .fade-in { animation: fadeIn 0.3s ease forwards; }
        .glow { box-shadow: 0 0 20px currentColor; }
      `}</style>

      {/* Header */}
      <div style={{
        bac
