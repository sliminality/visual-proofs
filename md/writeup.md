---
title: Mapping Form and Content in Euclid's *Elements*
author:
- name: Sarah Lim
- affiliation: Northwestern University
date: March 2017
---

\textit{Technologies of Language Final Project: Sarah Lim \hfill March 2017}

\setlength{\parindent}{2.5em}

# Introduction

For my final project, I produced two digital artifacts based on Henry Billingsley's translation of Euclid's renowned *Elements* textbook. The first artifact is an interactive digital proof of Book II, Proposition IV, which describes a core algebraic identity through concrete geometric figures. The second artifact is my attempt at reproducing the large disciplinary hierarchy from John Dee's Mathematical Preface to Euclid.

I created both artifacts from scratch, using a combination of HTML, Cascading Style Sheets (CSS), and JavaScript. Formally and aesthetically, programming languages are languages too, and I deeply enjoyed the experience of translating my ideas and thoughts from the course into code --- but more on that later.

I chose these artifacts because they provide avenues for cross-disciplinary discussions of mapping, structure, and knowledge representation, topics of great interest to me. This document describes my motivations and thought process throughout the course of this project. Because many of these ideas are very nascent, they do not always follow the format of a polished paper. Additionally, while I did explore many of the typographical directions discussed in my prospectus, this analysis will focus on theoretical topics that I felt were missing from my earlier assignments --- largely because I was still in the process of formulating my thoughts.

# Mapping and Representation

In mathematics, a *map* $f : X \to Y$ establishes a relation from an origin set called $X$ to a destination set called $Y$. The statement $f(x) = y$ thus says that under the mapping $f$, an individual object $x$ transforms into $y$ once it enters the destination. Mappings may have additional characteristics, but they can be fundamentally understood as transformations of entities, or bridges of commensurability between otherwise disparate realms. Much like Wittgenstein's notion of context-dependence, information under transformation may appear completely different depending on its representational coordinate scheme.

Many other philosophies of language we have studied dovetail closely with the formal model of the map. Saussure, for instance, argues for a two-sided model of language, a relation from the domain of arbitrary phonic signifiers to ideational, embodied conceptual signifieds. For Saussure, this linguistic relation is arbitrary but well-defined. Poststructuralist critics, including Lacan and Derrida, take issue with Saussure's teleological and binary presuppositions. Deconstruction aims to disrupt the rigid determinism of the linguistic relation, in favor of infinitely recursive deferrals in meaning. This concept, too, has a formal counterpart; the phenomenon of infinite functional recursion is well-understood by programming languages researchers who study a generalized abstraction of the mathematical map, and its implications for computation.

Of course, the most relevant discussion of representational theory comes from Drucker's distinction between graphesis and mathesis. To summarize, because it took me several re-readings to reach this still-provisional conclusion: *mathesis* refers to Leibniz's aspirational theory-of-everything, a formal system rich enough to represent anything within the scope of human cognition through abstract symbolic manipulation. Vaguely speaking, let $H$ denote the realm of human ideas up for expression, and let $M$ denote the representational space of this hypothetical formal system. Mathesis aspires to prove the existence of a special kind of mapping from $M \to H$, one which says that *every* unique human idea $h$ derives from some mathematical representation $m$. All of these $m$ representations are commensurable within the broader $M$ system, and they fully represent everything that "matters" about their human image $h$. Here, a unique, atomic human idea represents the "common unit" between various representational forms.

*Graphesis*, to the best of my understanding, refers to Drucker's proposed ideal of a visual "language" capable of similarly rich expression, but in concrete terms. One key difference between graphesis and mathesis lies in the *direction* of the mapping between human "data" and the universal representational system in question. Whereas mathesis postulates that every human idea can be derived from its abstract Platonic ideal, graphesis flips the order and says that the human idea itself can be directly mapped to a graphical representation $G$. In other words, no form precedes human expression; graphesis derives from human knowledge, but human knowledge derives from mathesis.

Euclid's *Elements* is a fascinating object of study in light of Drucker's purported distinction between mathesis and graphesis, abstract versus concrete. This is because throughout his book, Euclid relies heavily on constructive *visual* proofs for abstract mathematical ideas. In fact, Euclid popularized the *constructive* proof format, which answers a proposition of the form

> "Given these conditions, this other thing must exist."

\noindent
by constructing a particular example of such an "other thing." Since many of Euclid's proofs concern his eponymous two- and three-dimensional geometry, *Elements* takes graphesis to an extreme level by providing readers with a clear diagram of his construction for each proof. Indeed, Euclid's reliance on visual intuition drew criticism from Russell, a mathematician and philosopher who argued that visual examples do not rise to the threshold of proof, and that several of Euclid's constructions do not generalize appropriately to alternate geometric spaces (an irrecoverable gestalt shift, in this case). But there is no denying that graphesis and mathesis converge in fascinating ways when the "human idea" up for representation may itself be depicted either graphically or mathematically.

My [first digital artifact](http://sarahlim.com/visual-proofs/proof) aims to capture one aspect of this tradeoff. I digitized Euclid's proof of the fourth proposition from Book II. The proposition under test reads as follows: 

> If a straight line be divided into any two parts, the square of the whole line is equal to the squares of the two parts, together with twice the rectangle contained by the parts.

Here, the idea $h$ translates easily into a graphical form $g$, which consequently translates into compact geometric notation $m$ --- for instance, given points $A$ and $B$, we use $AB$ to denote the line segment connecting them, or $ABC$ to denote the angle formed by the intersection of lines $AB$ and $BC$. However, while this latter transformation $G \to M$ is a necessary construct of convenience and standardization, it often sets the stage for a consequent slippage in understanding by the reader, since the core idea no longer retains the concrete qualities of its original graphical representation. This phenomenon is a fascinating instance of a *conditional slippage* in meaning: formally, the abstract notational representation is a complete encoding of the original idea, and those well versed in symbolic notation often have no difficulty performing the reverse mapping or reasoning about the symbolic entities themselves. Yet in practice, many novices struggle to grasp the intuitive visual geometry from the abstract notation, since reading the proof requires the reader to continuously refer back to the provided figure (if one is even provided) and map each symbol back to the concrete line segment, angle, or rectangle it represents.

My digitization aims to facilitate this mapping --- to mitigate the conditional slippage of meaning, in a sense. The original figure has been recreated using browser SVG, and is anchored to the middle of the page as the reader scrolls. Within the body of the proof, symbolic notation for angles, lines, rectangles, and points have been tagged with colored labels; when the reader mouses their cursor over a tag, the corresponding entity in the figure is automatically highlighted, to reduce the cognitive load involved in understanding the core "idea unit" beneath the graphical entity and its abstract notational form.

I want to briefly discuss a few relevant aspects of the technical approach. I have personally found significant joy in the interplay between technology and theory and consider the topic woefully underresearched; I'm also very pleased with what I was able to accomplish from a technical standpoint.

Although the artifact here only provides one example, it is an early proof of concept (no pun intended) for a generalizable tool capable of *generating interactive two-dimensional visualizations from the text of geometric proofs* with certain characteristics. [^1] I chose this direction after spending days pondering Drucker's articulated ideal of a mapping between human thought, abstract mathesis, and graphical representation. Based on prior research in the aforementioned areas, I immediately began thinking of ways to automate the mapping between the abstract notation in the text, and the underlying graphical forms. This topic was particularly compelling for several reasons: it aligned with my primary research interests in programming languages, information visualization, and representation; it piqued my side interests in the philosophical implications of my chosen lines of work; and it was a tool that could directly help me, as someone with dyscalculia, in my mathematical studies.

In its current rough form, the tool itself is a mapping from the following inputs:

1. The text of the proof in question, e.g.
    ```
    Let the straight line AB be cut at random at C.

    I say that the square on AB equals the sum of the squares on AC and CB plus twice the
    rectangle AC by CB.
    ...
    ```
2. A list of all the points used in the figure. For this particular example, the list was:
    ```
    [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J' ]
    ```

The output of the mapping consists of an HTML document, including the figure automatically generated by parsing the contents of the text and automatically identifying line segments; symbolic entities in the document have been processed and made interactive mouseover targets, connected to the corresponding piece of the figure.

Although Drucker warns against the zero-sum juxtaposition of graphesis and mathesis, she never seems to provide a clear example of how these seemingly incompatible modes might in fact work together. I particularly enjoyed building this tool because it exemplifies precisely how we might leverage terse machine-readable representation to yield graphical clarity when the original domain is not so clear --- were Euclid's original ideas geometric intuitions, abstract formal derivations, or a combination of the two? I don't know, and this ambiguity is partially why I chose to work on a mathematical text. The body of the text already consists of "ordinary human language" interspersed with fragments of mathesis. My first artifact demonstrates how graphesis, too, can be brought into the mix, a genuinely multimodal reading experience that imperfectly translates the tangible exploration Billingsley intended for his edition of Euclid.

To conclude my discussion of the first artifact, I want to return to the concept of a unit when mapping across domains. To the disappointment of Saussure and co., I view the *idea* as the atomic unit preserved across domains and translations, and if anything, working on this project has further convinced me that ideas cannot be cleanly categorized into "those with embodied graphical representations" and "those which begin purely from formal abstractions." Recall the proposition of the proof in question:

> If a straight line be divided into any two parts, the square of the whole line is equal to the squares of the two parts, together with twice the rectangle contained by the parts.

Thus stated, the ideas under test appear to solidly fit within Drucker's graphesis, insofar as they yield a "natural" embodied form. However, there is a catch! As noted by those who have studied Euclid, this particular statement (and the corresponding proof) equates to the modern algebraic identity
$$(y + z)^2 = y^2 + z^2 + 2yz$$
\noindent
which would seem to place us solidly in the realm of mathesis. Which form is the canonical one? To which domain does the underlying idea belong? These are not easy questions, but to me, they illustrate the necessity of fluid mappings between embodied and abstract form.

# Form and Content

My [second digital artifact](http://sarahlim.com/visual-proofs/tree) represents my attempt to reconstruct the hierarchy of the scientific disciplines from John Dee's Mathematical Preface to the Billingsley edition of Euclid. Just as the diagram is sprawling and difficult to take in all at once, my digitization attempts to emulate the experience of unfolding something much too large and information-rich for a single take.

In creating this artifact, I grappled with the following question: what is the distinction between form and content, and how might one determine the other? Form encompasses not only the informational medium in the broadest sense (codex, scroll, webpage), but also the embodied presentation of the material (shaped poetry, multiple columns, no clear starting or ending point). My concept of form draws from Drucker's characterization of an object's *natural* graphical representation. Consider the pie chart, a visual form which typically needs no explaining, and which naturally elicits *comparison* between members of a data set. Alternately, a map of the world conveys relative spatial configurations of both familiar and unfamiliar regions, and the high-level features require minimal explanation.

In his Mathematical Preface, Dee offers his hierarchy of the scientific disciplines, beginning with a division between "pure" and "applied," and further subdividing from there. In this case, the content follows a particular shape, which admits a corresponding "natural" representation. Theoreticians have formalized what it means for information to be hierarchical --- namely, there cannot be a directed connection from any node to one of its ancestors --- but for a corpus of ideas to admit a single well-defined form is the exception, not the norm, as exemplified by the hybrid grapheme/mathemes discussed in Part 1. In either case, adopting a particular form constitutes an editorial decision, regardless of how well it "fits" the content at hand.

With respect to the physical world, Heidegger articulates a distinction between perceiving an object and perceiving its affordances --- "This hammer," versus "This hammer that is good for pushing nails into wood." In a similar vein, I argue that form is never neutral, no matter how natural it may seem. Returning to the preceding examples, pie charts *afford* comparison in ways plain data tables do not. Perhaps the distribution in question may be skewed in an interesting way, but the choice to foreground this comparison (and, conversely, the choice to deemphasize it) presupposes an instrumental understanding of data as a means toward eliciting a particular reaction. With maps, the orientation and choice of projection (another instance of mapping in the formal sense!) convey geopolitical statements, and reinforce or destabilize existing norms. 

Unlike Heidegger and his contemporaries, I am loathe to criticize instrumentality wholesale, which of course is not to deny the enormous significance of our discursive and representational practices. Rather, I aim to emphasize that form is capable of overdetermining both the aesthetics of content and the content itself. The experience of reading Euclid as a physical codex is very different from reading it as a scroll in its original Greek, and both experiences differ from the digital reader's experience. With instructional and descriptive texts, different forms establish or lower barriers to understanding and accessibility in a variety of senses --- the physical codex is accessible to very few people, difficult to transport, and difficult to quickly reference. An extreme limitation of the codex arises in the case of rare and delicate books, relegated to display in a collection rather than active reading. On a lower level, form determines the legibility and pacing of content; forms of Euclid containing densely-packed text, often with the same eight capital letters recurring repeatedly, are objectively more difficult to read than digital editions with variable text size and spacing. 

Returning to my second artifact, I describe it as an "attempt" to replicate Dee's hierarchy because it does not match the physical configuration of the original. Namely, the text labels are not aligned correctly with their enclosing braces, and several of the more complex forms at the end eluded my best implementation efforts (and believe me, I tried). In this sense, it is an unfaithful mapping of both form and content, from print to web.

What interests me is not simply that the effort failed, but that it failed with respect to my goal of creating an *idiomatic mapping* to the destination context. A week into my efforts, I found a [Project Gutenberg chart](http://www.gutenberg.org/files/22062/22062-h/files/groundplat.html) which includes all of the content of Dee's original and most, but not all, of the form. However, it is implemented using HTML `<table>` elements, which are necessary to achieve the more complex parts of the layout I struggled to replicate.

This discovery fascinated me, because it introduces an entirely new dimension to the form/content distinction. The appearance of a website is a function of two inputs: the HTML code, which dictates content structure and semantics, and the CSS code, which dictates presentation and style. This distinction is normative. In practice, since browsers assign different visual characteristics to different HTML elements (a `<header>` takes up the full page width, whereas a `<table>` only expands as far as its contents), developers often mix burdens by using semantically incorrect HTML elements to achieve their desired presentational outcomes.[^2] As this technical practice demonstrates, the distinction between form and content falls prey to the same inflexibilities plaguing ontological binaries since time immemorial. Just as the idealistic decoupling of form and content fails to reflect the actual practice of web development, theoretical accounts must rigorously examine the grey areas where form and content merge, whether naturally or as a consequence of human behavior.

The Project Gutenberg chart blurs the boundary between form and content by using the `<table>` element to depict non-tabular data. In creating my artifact, I explicitly set out to use semantically correct `<ul>` elements (denoting an **u**nordered **l**ist), in an effort to model a full translation from print to web forms. However, such a rigid structure is difficult to match with flexibly-positioned elements, which invokes a dilemma: absent a clean mapping from form $X \to Y$, when should we compromise in favor of authenticity to the source, and when should we accept lossiness of content in favor of the destination's idioms? In extreme cases, the former conclusion yields digitizations based on page-by-page scans, while the latter produces readable, navigable webpages entirely lacking in romance. Negotiating this tradeoff --- and developing new modalities which allow us to have our cake and tweet it too --- remains a fascinating unsolved problem for multimodal scholars.       

#

[^1]: I won't go too far into the mathematical details, but informally speaking, the proofs must be complete, adhere to certain notational conventions, and the figures must be a priori possible to draw in two dimensions. Note, too, that these limitations arise from the broader rigidity of technical approaches! My tool is hardly a panacea.

[^2]: Improper element usage makes web browsing very difficult for non-sighted users with screen reader technology, and complicates search engine indexing efforts.
