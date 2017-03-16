Sarah Lim

# Introduction

For my final project, I produced two digital artifacts based on Henry Billingsley's translation of Euclid's renowned *Elements* textbook. The first artifact is an interactive digital proof of Book II, Proposition IV, which describes a core algebraic identity through concrete geometric figures. The second artifact is my attempt at reproducing the large disciplinary hierarchy from John Dee's Mathematical Preface to Euclid.

I created both artifacts from scratch, using a combination of HTML, Cascading Style Sheets (CSS), and JavaScript. Formally and aesthetically, programming languages are languages too, and I deeply enjoyed the experience of translating my ideas and thoughts from the course into code --- but more on that later.

I chose these artifacts to further explore cross-disciplinary perspectives on mapping, structure, and knowledge representation, topics of great academic interest to me. The following document describes my motivations and thought process throughout the course of this project. Because many of these ideas are very nascent, they will not always follow the format of a polished paper.

# Mapping and Representation

In mathematics, a *map* $f : X \to Y$ establishes a relation from a domain $X$ to a codomain $Y$. The statement $f(x) = y$ thus relates an individual member $x$ of the domain $X$ to its *image* $y$ in the codomain $Y$. Mappings may have additional characteristics, but they can be fundamentally understood as transformations of entities, or bridges of commensurability between otherwise disparate realms. Much like a surrounding gestalt, information under transformation may appear completely different depending on its representational coordinate scheme.

Many other philosophies of language we have studied dovetail closely with the formal model of the map. Saussure, for instance, argues for a two-sided model of language, a relation from the domain of arbitrary phonic signifiers to ideational, embodied conceptual signifieds. For Saussure, this linguistic relation is arbitrary but well-defined. Poststructuralist critics, including Lacan and Derrida, take issue with Saussure's teleological and binary presuppositions. Deconstruction aims to disrupt the rigid determinism of the linguistic relation, in favor of infinitely recursive deferrals in meaning. A notion of infinite functional recursion is well-understood by programming languages researchers, who generalize the mathematical definition to study the theory behind programming *functions*.

Of course, the most relevant discussion of representational theory comes from Drucker's distinction between graphesis and mathesis. To summarize, because it took me several re-readings to conclude this: *mathesis* refers to Leibniz's aspirational theory-of-everything, a formal system rich enough to represent anything within the scope of human cognition through abstract symbolic manipulation. Vaguely speaking, let $H$ denote the realm of human ideas up for expression, and let $M$ denote the representational space of this hypothetical formal system. Mathesis aspires to prove the existence of a special kind of mapping from $M \to H$, one which says that *every* unique human idea $h$ derives from some mathematical representation $m$. All of these $m$ representations are commensurable within the broader $M$ system, and they fully represent everything that "matters" about their human image $h$. Here, a unique, atomic human idea represents the "common unit" between various representational forms.

*Graphesis*, to the best of my understanding, refers to Drucker's proposed ideal of a visual "language" capable of similarly rich expression, but in concrete terms. One key difference between graphesis and mathesis lies in the *direction* of the mapping between human "data" and the universal representational system in question. Whereas mathesis postulates that every human idea can be derived from its abstract Platonic ideal, graphesis flips the order and says that the human idea itself can be directly mapped to a graphical representation $G$. In other words, no form precedes human expression; graphesis derives from human knowledge, but human knowledge derives from mathesis.

Euclid's *Elements* provides a fascinating complication into Drucker's purported distinction between mathesis and graphesis, abstract versus concrete. This is because throughout his book, Euclid relies heavily on constructive *visual* proofs for abstract mathematical ideas. In fact, Euclid popularized the *constructive* proof format, which answers a proposition of the form

> "Given these conditions, this other thing must exist"

by constructing a particular example of such an "other thing." Since many of Euclid's proofs concern his eponymous two- and three-dimensional geometry, *Elements* takes graphesis to an extreme level by providing readers with a clear diagram of his construction for each proof. Indeed, Euclid's reliance on visual intuition drew criticism from Russell, a mathematician and philosopher who argued that visual examples do not rise to the threshold of proof, and that several of Euclid's constructions do not generalize appropriately to alternate geometric spaces (an irrecoverable gestalt shift, in this case). But there is no denying that graphesis and mathesis converge in fascinating ways when the "human idea" up for representation may itself be depicted either graphically or mathematically.

My [first digital artifact](http://sarahlim.com/visual-proofs/proof) aims to capture one aspect of this tradeoff. I digitized Euclid's proof of Book II. Prop. IV. The proposition under test reads as follows: 

> If a straight line be divided into any two parts, the square of the whole line is equal to the squares of the two parts, together with twice the rectangle contained by the parts.

Here, the idea $h$ translates easily into a graphical form $g$, which consequently translates into compact geometric notation $m$ -- for instance, given points $A$ and $B$, we use $AB$ to denote the line segment connecting them, or $ABC$ to denote the angle formed by the intersection of lines $AB$ and $BC$. However, while this latter transformation $G \to M$ is a necessary construct of convenience and standardization, it often sets the stage for a consequent slippage in understanding by the reader, since the core idea no longer retains the concrete qualities of its original graphical representation. This phenomenon is a fascinating instance of a *conditional slippage* in meaning: formally, the abstract notational representation is a complete encoding of the original idea, and those well versed in symbolic notation often have no difficulty performing the reverse mapping or reasoning about the symbolic entities themselves. Yet in practice, many novices struggle to grasp the intuitive visual geometry from the abstract notation, since reading the proof requires the reader to continuously refer back to the provided figure (if one is even provided) and map each symbol back to the concrete line segment, angle, or rectangle it represents.

My digitization aims to facilitate this mapping -- to mitigate the conditional slippage of meaning, in a sense. The original figure has been recreated using browser SVG, and is anchored to the middle of the page as the reader scrolls. Within the body of the proof, symbolic notation for angles, lines, rectangles, and points have been tagged with colored label; when the reader mouses their cursor over a tag, the corresponding entity in the figure is automatically highlighted, to reduce the cognitive load involved in understanding the core "idea unit" beneath the graphical entity and its abstract notational form.

<!-- I programmed a tool to parse the text of the proof using *regular expressions* (another totally fascinating view of language, sadly beyond the scope of this project), and extract every sequence of  -->



<!-- # Form Versus Content

Graphesis, mathesis -- the proof as a concrete manifestation of an abstract idea

Semantics vs presentation

Tables and the tree

Form overdetermines content

# Implications -->

#
