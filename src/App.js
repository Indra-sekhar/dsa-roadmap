import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "PHASE 1",
    subtitle: "Solidify the Foundation",
    duration: "Weeks 1–4",
    color: "#00ff9d",
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
        ],
        tip: "🔑 For every problem: first solve brute force, then optimize. Never jump to optimal directly.",
        daily: "45 min concept → 45 min solve 1 problem → 10 min review solution",
      },
      {
        name: "Hashing & Maps",
        weeks: "Week 3",
        why: "unordered_map is your best friend in C++. 80% of array problems become trivial with hashing.",
        concepts: ["unordered_map", "unordered_set", "Frequency counting", "Anagram detection"],
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
        name: "Sorting & Binary Search",
        weeks: "Week 4",
        why: "Binary Search is tested in EVERY interview. Master it fully.",
        concepts: ["Binary Search variants", "Merge Sort", "Quick Sort", "Sort + Two Pointer"],
        problems: [
          { name: "Binary Search", diff: "Easy", link: "https://leetcode.com/problems/binary-search/" },
          { name: "Search in Rotated Sorted Array", diff: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
          { name: "Find Minimum in Rotated Sorted Array", diff: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
          { name: "Kth Largest Element", diff: "Medium", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        ],
        tip: "🔑 Binary Search isn't just for sorted arrays — it works on any monotonic condition.",
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
    topics: [
      {
        name: "Linked Lists",
        weeks: "Week 5–6",
        why: "Tests pointer manipulation — common in Google/Amazon interviews.",
        concepts: ["Singly & Doubly LL", "Fast & Slow pointers", "Reverse", "Merge", "Floyd's cycle detection"],
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
        concepts: ["Stack (LIFO)", "Queue (FIFO)", "Monotonic Stack", "Deque", "Next Greater Element"],
        problems: [
          { name: "Valid Parentheses", diff: "Easy", link: "https://leetcode.com/problems/valid-parentheses/" },
          { name: "Daily Temperatures", diff: "Medium", link: "https://leetcode.com/problems/daily-temperatures/" },
          { name: "Largest Rectangle in Histogram", diff: "Hard", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
          { name: "Sliding Window Maximum", diff: "Hard", link: "https://leetcode.com/problems/sliding-window-maximum/" },
        ],
        tip: "🔑 Monotonic stack = when you see next greater/smaller element — immediately think stack.",
        daily: "60 min problems + 30 min pattern recognition",
      },
      {
        name: "Recursion & Backtracking",
        weeks: "Week 8",
        why: "The mental model for Trees, Graphs, DP. You CANNOT skip this.",
        concepts: ["Recursion tree visualization", "Base cases", "Backtracking template", "Subsets, Permutations"],
        problems: [
          { name: "Subsets", diff: "Medium", link: "https://leetcode.com/problems/subsets/" },
          { name: "Permutations", diff: "Medium", link: "https://leetcode.com/problems/permutations/" },
          { name: "Combination Sum", diff: "Medium", link: "https://leetcode.com/problems/combination-sum/" },
          { name: "Word Search", diff: "Medium", link: "https://leetcode.com/problems/word-search/" },
          { name: "N-Queens", diff: "Hard", link: "https://leetcode.com/problems/n-queens/" },
        ],
        tip: "🔑 Draw the recursion tree for EVERY backtracking problem.",
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
    topics: [
      {
        name: "Binary Trees",
        weeks: "Week 9–10",
        why: "Trees appear in 30%+ of FAANG interviews. Most important topic.",
        concepts: ["DFS (Pre/In/Post order)", "BFS (Level order)", "Height/Depth", "Diameter", "LCA"],
        problems: [
          { name: "Invert Binary Tree", diff: "Easy", link: "https://leetcode.com/problems/invert-binary-tree/" },
          { name: "Maximum Depth", diff: "Easy", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
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
        why: "BST properties + priority_queue in C++ are heavily tested.",
        concepts: ["BST insert/delete/search", "Inorder = sorted", "priority_queue", "Top K pattern"],
        problems: [
          { name: "Validate BST", diff: "Medium", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
          { name: "Kth Smallest in BST", diff: "Medium", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
          { name: "Find Median from Data Stream", diff: "Hard", link: "https://leetcode.com/problems/find-median-from-data-stream/" },
        ],
        tip: "🔑 Know priority_queue<int,vector<int>,greater<int>> for min-heap in C++ cold.",
        daily: "Implement heap from scratch once. Then focus on problems.",
      },
      {
        name: "Graphs",
        weeks: "Week 12–13",
        why: "Graph problems are all BFS/DFS + a twist. The twist is the skill.",
        concepts: ["Adjacency list/matrix", "BFS", "DFS", "Topological Sort", "Union-Find"],
        problems: [
          { name: "Number of Islands", diff: "Medium", link: "https://leetcode.com/problems/number-of-islands/" },
          { name: "Clone Graph", diff: "Medium", link: "https://leetcode.com/problems/clone-graph/" },
          { name: "Course Schedule", diff: "Medium", link: "https://leetcode.com/problems/course-schedule/" },
          { name: "Word Ladder", diff: "Hard", link: "https://leetcode.com/problems/word-ladder/" },
        ],
        tip: "🔑 For graphs: always ask — directed/undirected? weighted? cyclic?",
        daily: "Implement BFS + DFS on graph from scratch every week",
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
        tip: "🔑 Implement Trie from memory in C++ — it's often asked directly.",
        daily: "1 day implement → 3 days problems",
      },
    ],
    milestone: "✅ Implement Tree/Graph traversals blindfolded. Solve 40+ problems.",
  },
  {
    id: 4,
    title: "PHASE 4",
    subtitle: "Dynamic Programming",
    duration: "Weeks 15–20",
    color: "#ff4f7b",
    topics: [
      {
        name: "DP Foundations",
        weeks: "Week 15–16",
        why: "DP is the #1 differentiator between good and great candidates at top MNCs.",
        concepts: ["Memoization (top-down)", "Tabulation (bottom-up)", "State definition", "1D DP"],
        problems: [
          { name: "Climbing Stairs", diff: "Easy", link: "https://leetcode.com/problems/climbing-stairs/" },
          { name: "House Robber", diff: "Medium", link: "https://leetcode.com/problems/house-robber/" },
          { name: "Longest Increasing Subsequence", diff: "Medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
          { name: "Coin Change", diff: "Medium", link: "https://leetcode.com/problems/coin-change/" },
          { name: "Decode Ways", diff: "Medium", link: "https://leetcode.com/problems/decode-ways/" },
        ],
        tip: "🔑 ALWAYS define dp[i] in plain English before writing code.",
        daily: "Solve recursion → memoize → tabulate. Every single problem.",
      },
      {
        name: "2D DP & Sequences",
        weeks: "Week 17–18",
        why: "2D DP is where most people give up. Mastering it separates FAANG candidates.",
        concepts: ["Grid DP", "Knapsack (0/1)", "LCS", "Edit Distance", "Partition DP"],
        problems: [
          { name: "Unique Paths", diff: "Medium", link: "https://leetcode.com/problems/unique-paths/" },
          { name: "Longest Common Subsequence", diff: "Medium", link: "https://leetcode.com/problems/longest-common-subsequence/" },
          { name: "Edit Distance", diff: "Hard", link: "https://leetcode.com/problems/edit-distance/" },
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
    milestone: "✅ Solve 40+ DP problems. Can identify DP vs Greedy. Can define state + transition.",
  },
  {
    id: 5,
    title: "PHASE 5",
    subtitle: "Advanced & Interview Prep",
    duration: "Weeks 21–26",
    color: "#bf7fff",
    topics: [
      {
        name: "Greedy Algorithms",
        weeks: "Week 21",
        why: "Greedy is counterintuitive — you need to prove WHY greedy works.",
        concepts: ["Activity selection", "Interval scheduling", "Proof by exchange argument"],
        problems: [
          { name: "Jump Game", diff: "Medium", link: "https://leetcode.com/problems/jump-game/" },
          { name: "Merge Intervals", diff: "Medium", link: "https://leetcode.com/problems/merge-intervals/" },
          { name: "Gas Station", diff: "Medium", link: "https://leetcode.com/problems/gas-station/" },
        ],
        tip: "🔑 Always ask: can I prove a greedy choice doesn't hurt future decisions?",
        daily: "Solve + write 2-line proof of why greedy is correct",
      },
      {
        name: "Advanced Graphs",
        weeks: "Week 22–23",
        why: "Dijkstra + Bellman-Ford appear in senior roles and SDE-2+ interviews.",
        concepts: ["Dijkstra's algorithm", "Bellman-Ford", "Floyd-Warshall", "MST (Kruskal/Prim)"],
        problems: [
          { name: "Network Delay Time", diff: "Medium", link: "https://leetcode.com/problems/network-delay-time/" },
          { name: "Cheapest Flights K Stops", diff: "Medium", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
          { name: "Min Cost to Connect Points", diff: "Medium", link: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
        ],
        tip: "🔑 Implement Dijkstra with priority_queue in C++ until it's muscle memory.",
        daily: "Implement from scratch daily for 1 week straight",
      },
      {
        name: "Mock Interviews & Revision",
        weeks: "Week 24–26",
        why: "Knowing DSA ≠ performing in interviews. This phase builds execution under pressure.",
        concepts: ["Timed problem solving (45 min)", "Thinking out loud", "Edge case checklist"],
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

const diffColor = { Easy: "#00ff9d", Medium: "#ffb800", Hard: "#ff4f7b", Mixed: "#bf7fff" };

export default function App() {
  const [activePhase, setActivePhase] = useState(1);
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeTab, setActiveTab] = useState("roadmap");

  const phase = phases[activePhase - 1];
  const topic = phase.topics[activeTopic];

  return (
    <div style={{ minHeight: "100vh", background: "#080c14", color: "#e8eaf0", fontFamily: "'IBM Plex Mono', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #1e2a3a; border-radius: 2px; }
        .phase-btn:hover { transform: translateY(-2px); }
        .prob-row:hover { background: rgba(255,255,255,0.04) !important; }
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.3} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)} }
        .fade-in { animation: fadeIn 0.3s ease forwards; }
        a { text-decoration: none; }
      `}</style>

      {/* Header */}
      <div style={{ background: "#0d1220", borderBottom: "1px solid #1a2235", padding: "24px 20px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00ff9d", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: "10px", color: "#4a6a8a", letterSpacing: "2px", textTransform: "uppercase" }}>C++ · 1–2 hrs/day · Deep Learning</span>
        </div>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(20px,5vw,34px)", fontWeight: 800, background: "linear-gradient(90deg,#fff,#8ab4d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>DSA MASTERY ROADMAP</h1>
        <p style={{ color: "#4a7a9b", fontSize: "12px", marginTop: "6px" }}>26 weeks · 5 phases · 150+ problems</p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #1a2235", padding: "0 20px", overflowX: "auto" }}>
        {["roadmap", "schedule", "c++ tips"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            background: "none", border: "none", color: activeTab === tab ? "#00ff9d" : "#4a6a8a",
            fontFamily: "'IBM Plex Mono',monospace", fontSize: "11px", fontWeight: 600,
            letterSpacing: "2px", textTransform: "uppercase", padding: "12px 16px",
            cursor: "pointer", borderBottom: activeTab === tab ? "2px solid #00ff9d" : "2px solid transparent",
            whiteSpace: "nowrap", transition: "all 0.2s",
          }}>{tab}</button>
        ))}
      </div>

      {activeTab === "roadmap" && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Phase selector */}
          <div style={{ display: "flex", gap: "8px", padding: "16px", overflowX: "auto", borderBottom: "1px solid #1a2235" }}>
            {phases.map(p => (
              <button key={p.id} className="phase-btn" onClick={() => { setActivePhase(p.id); setActiveTopic(0); }} style={{
                background: activePhase === p.id ? `${p.color}18` : "#0d1220",
                border: `1px solid ${activePhase === p.id ? p.color : "#1a2235"}`,
                borderRadius: "8px", padding: "10px 14px", cursor: "pointer", textAlign: "left",
                minWidth: "130px", transition: "all 0.2s",
              }}>
                <div style={{ fontSize: "10px", color: p.color, fontWeight: 700, letterSpacing: "2px" }}>{p.title}</div>
                <div style={{ fontSize: "11px", color: activePhase === p.id ? "#c8d8e8" : "#4a6a8a", marginTop: "3px" }}>{p.subtitle}</div>
                <div style={{ fontSize: "10px", color: "#2a4a6a", marginTop: "4px" }}>{p.duration}</div>
              </button>
            ))}
          </div>

          {/* Topic tabs */}
          <div style={{ display: "flex", gap: "6px", padding: "12px 16px", overflowX: "auto", borderBottom: "1px solid #1a2235" }}>
            {phase.topics.map((t, i) => (
              <button key={i} onClick={() => setActiveTopic(i)} style={{
                background: activeTopic === i ? "rgba(255,255,255,0.07)" : "transparent",
                border: `1px solid ${activeTopic === i ? "#2a3a50" : "transparent"}`,
                borderRadius: "6px", padding: "8px 12px", cursor: "pointer",
                fontSize: "11px", color: activeTopic === i ? "#e8eaf0" : "#6a8aaa",
                whiteSpace: "nowrap", fontFamily: "'IBM Plex Mono',monospace", transition: "all 0.2s",
              }}>{t.name}</button>
            ))}
          </div>

          {/* Topic detail */}
          <div className="fade-in" key={`${activePhase}-${activeTopic}`} style={{ padding: "20px 16px" }}>
            <div style={{ fontSize: "10px", color: phase.color, letterSpacing: "2px", marginBottom: "6px" }}>{topic.weeks.toUpperCase()}</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "20px", fontWeight: 800, marginBottom: "12px" }}>{topic.name}</h2>

            <div style={{ background: "#0d1a28", borderLeft: `3px solid ${phase.color}`, borderRadius: "0 8px 8px 0", padding: "12px 14px", marginBottom: "18px", fontSize: "12px", color: "#8ab4d4", lineHeight: 1.7 }}>
              <strong style={{ color: "#c8d8e8" }}>Why: </strong>{topic.why}
            </div>

            <div style={{ marginBottom: "18px" }}>
              <div style={{ fontSize: "10px", color: "#2a4a6a", letterSpacing: "2px", marginBottom: "10px" }}>CONCEPTS</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {topic.concepts.map((c, i) => (
                  <span key={i} style={{ background: "#0d1a28", border: "1px solid #1e3050", borderRadius: "6px", padding: "5px 10px", fontSize: "11px", color: "#8ab4d4" }}>{c}</span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "18px" }}>
              <div style={{ fontSize: "10px", color: "#2a4a6a", letterSpacing: "2px", marginBottom: "10px" }}>PROBLEMS</div>
              <div style={{ border: "1px solid #1a2235", borderRadius: "10px", overflow: "hidden" }}>
                {topic.problems.map((p, i) => (
                  <a key={i} href={p.link} target="_blank" rel="noreferrer">
                    <div className="prob-row" style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "12px 14px", borderBottom: i < topic.problems.length - 1 ? "1px solid #1a2235" : "none",
                      transition: "background 0.15s",
                    }}>
                      <span style={{ fontSize: "12px", color: "#c8d8e8" }}>{i + 1}. {p.name}</span>
                      <span style={{ fontSize: "10px", fontWeight: 700, color: diffColor[p.diff], background: `${diffColor[p.diff]}15`, padding: "3px 8px", borderRadius: "4px" }}>{p.diff}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ background: "#0d1a28", border: "1px solid #1e3050", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
              <div style={{ fontSize: "10px", color: "#2a4a6a", letterSpacing: "2px", marginBottom: "8px" }}>EXPERT TIP</div>
              <div style={{ fontSize: "12px", color: "#8ab4d4", lineHeight: 1.8 }}>{topic.tip}</div>
            </div>

            <div style={{ background: "#0d1a28", border: "1px solid #1e3050", borderRadius: "10px", padding: "14px" }}>
              <div style={{ fontSize: "10px", color: "#2a4a6a", letterSpacing: "2px", marginBottom: "8px" }}>DAILY STRUCTURE</div>
              <div style={{ fontSize: "12px", color: "#8ab4d4", lineHeight: 1.8 }}>{topic.daily}</div>
            </div>

            <div style={{ marginTop: "16px", padding: "14px", background: "#0d1220", border: "1px solid #1a2235", borderRadius: "10px" }}>
              <div style={{ fontSize: "10px", color: "#2a4a6a", letterSpacing: "2px", marginBottom: "8px" }}>PHASE MILESTONE</div>
              <div style={{ fontSize: "12px", color: "#4a7a6a", lineHeight: 1.7 }}>{phase.milestone}</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "schedule" && (
        <div style={{ padding: "20px 16px" }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "20px", marginBottom: "16px" }}>Weekly Schedule</h2>
          {[
            { day: "Mon", activity: "Learn concept + implement in C++", icon: "📖" },
            { day: "Tue", activity: "Solve 1 Easy — brute force first", icon: "🔨" },
            { day: "Wed", activity: "Solve 1 Medium — optimize", icon: "⚡" },
            { day: "Thu", activity: "Revisit + learn optimal pattern", icon: "🔄" },
            { day: "Fri", activity: "1 cold problem — 45 min timer", icon: "🎯" },
            { day: "Sat", activity: "Re-solve 3 problems from memory", icon: "🧠" },
            { day: "Sun", activity: "Rest OR LeetCode contest", icon: "🏆" },
          ].map((d, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", background: "#0d1220", border: "1px solid #1a2235", borderRadius: "10px", padding: "14px", marginBottom: "8px" }}>
              <div style={{ minWidth: "36px", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "13px", color: i === 6 ? "#4a6a8a" : "#e8eaf0" }}>{d.day}</div>
              <div style={{ fontSize: "18px" }}>{d.icon}</div>
              <div style={{ fontSize: "12px", color: i === 6 ? "#4a6a8a" : "#8ab4d4" }}>{d.activity}</div>
            </div>
          ))}
          <div style={{ marginTop: "20px", background: "#0d1a28", border: "1px solid #1e3050", borderRadius: "12px", padding: "18px" }}>
            <div style={{ fontSize: "10px", color: "#2a4a6a", letterSpacing: "2px", marginBottom: "10px" }}>GOLDEN RULE</div>
            <div style={{ fontSize: "13px", color: "#c8d8e8", lineHeight: 1.9 }}>
              <span style={{ color: "#00ff9d", fontWeight: 700 }}>Never</span> move to next topic until you solve 2 easy + 2 medium <span style={{ color: "#ffb800" }}>without hints</span>. Depth beats speed every time.
            </div>
          </div>
        </div>
      )}

      {activeTab === "c++ tips" && (
        <div style={{ padding: "20px 16px" }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "20px", marginBottom: "16px" }}>C++ Cheatsheet</h2>
          {[
            { tip: "Range-for loop", code: "for(auto& x : vec)" },
            { tip: "Min-heap", code: "priority_queue<int,vector<int>,greater<int>>" },
            { tip: "Sort descending", code: "sort(v.begin(),v.end(),greater<int>())" },
            { tip: "Hash map O(1)", code: "unordered_map<int,int> mp;" },
            { tip: "Infinity", code: "int INF = INT_MAX;" },
            { tip: "String to int", code: "int n = stoi(s);" },
          ].map((t, i) => (
            <div key={i} style={{ background: "#0d1220", border: "1px solid #1a2235", borderRadius: "10px", padding: "14px", marginBottom: "8px" }}>
              <div style={{ fontSize: "11px", color: "#4a7a9b", marginBottom: "8px" }}>{t.tip}</div>
              <code style={{ fontSize: "12px", color: "#00ff9d", background: "#060a10", padding: "8px 12px", borderRadius: "6px", display: "block" }}>{t.code}</code>
            </div>
          ))}
          <div style={{ marginTop: "16px", background: "#0d1220", border: "1px solid #1a2235", borderRadius: "12px", padding: "18px" }}>
            <div style={{ fontSize: "10px", color: "#2a4a6a", letterSpacing: "2px", marginBottom: "12px" }}>FREE RESOURCES</div>
            {[
              { name: "NeetCode 150", url: "https://neetcode.io/practice", desc: "Best curated problem list" },
              { name: "CP-Algorithms", url: "https://cp-algorithms.com", desc: "Deep C++ implementations" },
              { name: "Striver's A2Z Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", desc: "Best Indian MNC prep sheet" },
            ].map((r, i) => (
              <a key={i} href={r.url} target="_blank" rel="noreferrer">
                <div className="prob-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < 2 ? "1px solid #1a2235" : "none" }}>
                  <div>
                    <div style={{ fontSize: "13px", color: "#c8d8e8", fontWeight: 600 }}>{r.name}</div>
                    <div style={{ fontSize: "11px", color: "#4a6a8a", marginTop: "2px" }}>{r.desc}</div>
                  </div>
                  <span style={{ color: "#00ff9d", fontSize: "16px" }}>↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
