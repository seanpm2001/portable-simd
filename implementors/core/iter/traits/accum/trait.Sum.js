(function() {var implementors = {
"core_simd":[["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i32.html\">i32</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i32.html\">i32</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.isize.html\">isize</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.isize.html\">isize</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.f32.html\">f32</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.f32.html\">f32</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.f32.html\">f32</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.f32.html\">f32</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.f64.html\">f64</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.f64.html\">f64</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i8.html\">i8</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i8.html\">i8</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.f64.html\">f64</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.f64.html\">f64</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i16.html\">i16</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i16.html\">i16</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.isize.html\">isize</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.isize.html\">isize</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i16.html\">i16</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i16.html\">i16</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i64.html\">i64</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i64.html\">i64</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i64.html\">i64</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i64.html\">i64</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;'a, const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i8.html\">i8</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i8.html\">i8</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"],["impl&lt;const LANES: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i32.html\">i32</a>, LANES&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i32.html\">i32</a>, LANES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()