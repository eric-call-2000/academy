window.ACADEMY.addUnit("revit", {
  id: "unit-14",
  title: "Geometry & Computational Design",
  color: "#ff9600",
  icon: "📐",
  description: "Points, curves, surfaces, solids, and the parametric logic of computational design.",
  lessons: [
    {
      id: "l161",
      title: "The Geometry Hierarchy",
      intro: "How Dynamo organizes geometry into abstract helpers and tangible drawable shapes.",
      questions: [
        {
          type: "mcq",
          q: "Dynamo splits geometry into two families. Which set belongs to the ABSTRACT family (helpers that define location and orientation, not drawable shapes)?",
          choices: [
            "Point, Curve, Surface",
            "Vector, Plane, CoordinateSystem",
            "Solid, Mesh, Surface",
            "Line, Arc, Circle"
          ],
          answer: 1,
          explain: "Abstract geometry (Vector, Plane, CoordinateSystem) defines location and orientation but has no drawable form. Tangible geometry (Point, Curve, Surface, Solid, Mesh) is the visible shapes you can create and see."
        },
        {
          type: "truefalse",
          q: "A Vector is a tangible, drawable piece of geometry just like a Solid.",
          answer: false,
          explain: "A Vector is abstract. It describes direction and magnitude to orient or move geometry, but it is not a drawable shape the way a Point, Curve, Surface, or Solid is."
        },
        {
          type: "order",
          q: "Put the tangible geometry types in order of the dependency ladder, from the simplest building block to the shape it ultimately bounds.",
          items: ["Point", "Curve", "Surface", "Solid"],
          explain: "Points build Curves, Curves build Surfaces, and Surfaces bound Solids. Each level of tangible geometry is constructed from the level below it."
        },
        {
          type: "fill",
          q: "Dynamo's underlying geometry library is called ____ (also known as DesignScript geometry).",
          answer: "ProtoGeometry",
          accept: ["protogeometry", "proto geometry", "designscript"],
          explain: "ProtoGeometry, also called DesignScript geometry, is the engine behind Dynamo's geometry nodes. It defines how points, curves, surfaces, and solids are created and queried."
        },
        {
          type: "mcq",
          q: "What is the minimum number of points required to define a curve such as a line?",
          choices: [
            "One point",
            "Two points",
            "Three points",
            "Four points"
          ],
          answer: 1,
          explain: "A curve like a line needs at least two points to define a start and an end. A polygon or a mesh face requires at least three points to enclose an area."
        },
        {
          type: "match",
          q: "Match each geometry type to its family in Dynamo.",
          pairs: [
            ["Plane", "Abstract helper"],
            ["Point", "Tangible geometry"],
            ["CoordinateSystem", "Abstract helper"],
            ["Solid", "Tangible geometry"]
          ],
          explain: "Planes and CoordinateSystems are abstract helpers used for orientation, while Points and Solids are tangible geometry you can draw and see in the Dynamo preview."
        },
        {
          type: "truefalse",
          q: "You need at least three points to define a polygon or a mesh face.",
          answer: true,
          explain: "A closed polygon or a single mesh face encloses an area, which requires a minimum of three points. Two points can only define an open segment like a line."
        },
        {
          type: "mcq",
          q: "Which statement best describes the dependency ladder of tangible geometry?",
          choices: [
            "Solids build Surfaces, which build Curves, which build Points",
            "Points build Curves, Curves build Surfaces, Surfaces bound Solids",
            "Every geometry type is created independently with no dependencies",
            "Meshes are required before any Point can exist"
          ],
          answer: 1,
          explain: "The ladder flows upward: Points build Curves, Curves build Surfaces, and Surfaces bound Solids. Understanding this order is key to constructing geometry deliberately in Dynamo."
        }
      ]
    },
    {
      id: "l162",
      title: "Points",
      intro: "The foundational geometry from which nearly everything in Dynamo is built.",
      questions: [
        {
          type: "mcq",
          q: "Which node is the most common way to create a point at a specific location in the World Coordinate System?",
          choices: [
            "Point.ByCoordinates(x, y, z)",
            "Point.AtParameter(t)",
            "Vector.ByCoordinates(x, y, z)",
            "Plane.ByOriginNormal(origin, normal)"
          ],
          answer: 0,
          explain: "Point.ByCoordinates(x, y, z) places a point at explicit X, Y, and Z values in the World Coordinate System. Supplying only x and y creates a 2D point on the XY plane."
        },
        {
          type: "truefalse",
          q: "Point.ByCoordinates(x, y) with only two inputs creates a 2D point that lies on the XY plane.",
          answer: true,
          explain: "When you omit the Z value, Dynamo assumes Z is zero, placing the point on the XY plane. This is handy for building flat, 2D layouts before extruding into 3D."
        },
        {
          type: "fill",
          q: "To get a point sitting ON a curve at parameter t (from 0 to 1), you use Curve.____.",
          answer: "PointAtParameter",
          accept: ["pointatparameter", "point at parameter"],
          explain: "Curve.PointAtParameter evaluates a curve at a normalized parameter between 0 and 1 and returns the point located there. A t of 0 is the start and 1 is the end."
        },
        {
          type: "mcq",
          q: "Which node measures the distance between two pieces of geometry and forms the basis of attractor logic?",
          choices: [
            "Point.X",
            "Geometry.DistanceTo",
            "Point.ByCoordinates",
            "Curve.Length"
          ],
          answer: 1,
          explain: "Geometry.DistanceTo returns the distance between two geometry objects. It is the core measurement behind attractor logic, where each element responds to how far it sits from an attractor."
        },
        {
          type: "match",
          q: "Match each point-related node to what it does.",
          pairs: [
            ["Point.ByCoordinates", "Create a point from X, Y, Z"],
            ["Point.X", "Query a point's X coordinate"],
            ["Curve.PointAtParameter", "Get a point on a curve at t"],
            ["Geometry.DistanceTo", "Measure distance between geometry"]
          ],
          explain: "Point.ByCoordinates builds points, Point.X reads back a coordinate, Curve.PointAtParameter locates a point along a curve, and Geometry.DistanceTo measures separation."
        },
        {
          type: "order",
          q: "Order these steps to build a point on a curve and then measure how far it is from another point.",
          items: [
            "Create a curve from points",
            "Use Curve.PointAtParameter to get a point on the curve",
            "Use Geometry.DistanceTo to measure to a second point"
          ],
          explain: "First you need a curve, then you evaluate a point on it at some parameter, and finally you can measure the distance from that point to another using Geometry.DistanceTo."
        },
        {
          type: "truefalse",
          q: "Point.X, Point.Y, and Point.Z are used to query the coordinate values of an existing point.",
          answer: true,
          explain: "These nodes read back the individual X, Y, and Z components of a point, letting you extract numeric values from geometry for calculations or comparisons."
        },
        {
          type: "mcq",
          q: "Why is the Point considered the foundational geometry in Dynamo?",
          choices: [
            "Because points are the only geometry that can be colored",
            "Because nearly everything else is built from points",
            "Because points cannot be moved once created",
            "Because points are the only abstract geometry type"
          ],
          answer: 1,
          explain: "Points are the base building block: curves are made from points, surfaces from curves, and solids from surfaces. Master points and the rest of the hierarchy follows."
        }
      ]
    },
    {
      id: "l163",
      title: "Vectors, Planes & Coordinate Systems",
      intro: "The abstract helpers that give geometry direction, a flat reference, and a local space.",
      questions: [
        {
          type: "mcq",
          q: "Which pair of properties best describes a Vector?",
          choices: [
            "Direction and magnitude, with no fixed position",
            "A fixed origin and a drawable surface",
            "Area and volume",
            "A closed boundary and two parameters U and V"
          ],
          answer: 0,
          explain: "A Vector carries direction and magnitude but has no fixed position in space. It answers 'which way and how far,' which is why it is used to move and orient geometry."
        },
        {
          type: "fill",
          q: "To build a plane from a single origin point and a normal vector, you use Plane.____.",
          answer: "ByOriginNormal",
          accept: ["byoriginnormal", "by origin normal"],
          explain: "Plane.ByOriginNormal defines an infinite flat plane using an origin point for position and a normal vector for the direction the plane faces."
        },
        {
          type: "truefalse",
          q: "A Plane in Dynamo is a finite rectangle with a defined width and height.",
          answer: false,
          explain: "A Plane is an infinite flat 2D helper extending in two directions. It is used as a reference for mirroring, cutting, or orienting geometry, not as a drawable finite panel."
        },
        {
          type: "mcq",
          q: "What does a CoordinateSystem provide that a bare Plane does not?",
          choices: [
            "A closed volume with faces and edges",
            "An origin plus full X, Y, and Z axis orientation defining a local space",
            "A parametric range from 0 to 1",
            "A measurable area"
          ],
          answer: 1,
          explain: "A CoordinateSystem combines an origin with X, Y, and Z axes to define a complete local space. Geometry can be moved between coordinate systems to reposition and reorient it."
        },
        {
          type: "match",
          q: "Match each abstract helper to how you create or use it.",
          pairs: [
            ["Vector", "Vector.ByCoordinates"],
            ["Plane", "Plane.ByOriginNormal"],
            ["CoordinateSystem", "CoordinateSystem.ByOrigin"],
            ["Unit vector", "Vector.Normalized"]
          ],
          explain: "Vectors come from Vector.ByCoordinates, planes from Plane.ByOriginNormal, coordinate systems from CoordinateSystem.ByOrigin, and Vector.Normalized returns a unit-length version of a vector."
        },
        {
          type: "truefalse",
          q: "Vector.Normalized returns a vector pointing in the same direction but with a length of 1.",
          answer: true,
          explain: "Normalizing a vector keeps its direction while scaling its magnitude to 1. Unit vectors are useful when you only care about direction, such as for a surface normal."
        },
        {
          type: "order",
          q: "Order these from most limited to most complete in terms of the spatial information they carry.",
          items: ["Vector (direction only)", "Plane (flat reference)", "CoordinateSystem (origin plus three axes)"],
          explain: "A Vector carries only direction and magnitude, a Plane adds a flat reference with an origin and normal, and a CoordinateSystem carries a full origin plus three axes defining a local space."
        },
        {
          type: "mcq",
          q: "Which node gives you the pre-built world direction vectors along the axes?",
          choices: [
            "Vector.XAxis, Vector.YAxis, Vector.ZAxis",
            "Point.X, Point.Y, Point.Z",
            "Plane.XY, Plane.YZ, Plane.XZ",
            "Curve.StartPoint, Curve.EndPoint"
          ],
          answer: 0,
          explain: "Vector.XAxis, Vector.YAxis, and Vector.ZAxis return the standard unit direction vectors of the World Coordinate System, a quick way to point geometry along a world axis."
        }
      ]
    },
    {
      id: "l164",
      title: "Curves",
      intro: "The parent curve type, its many kinds, and the parameter space that runs along every curve.",
      questions: [
        {
          type: "mcq",
          q: "Which node creates a straight line between two given points?",
          choices: [
            "Line.ByStartPointEndPoint",
            "PolyCurve.ByPoints",
            "NurbsCurve.ByControlPoints",
            "Surface.ByPatch"
          ],
          answer: 0,
          explain: "Line.ByStartPointEndPoint draws a straight line from a start point to an end point. Line is one of several kinds of curve, all of which share the parent Curve type."
        },
        {
          type: "fill",
          q: "Every curve in Dynamo is parametrized from 0 to ____, where that value marks the end of the curve.",
          answer: "1",
          accept: ["1", "one"],
          explain: "Curves use a normalized parameter t that runs from 0 at the start to 1 at the end. This lets nodes like PointAtParameter locate positions along any curve consistently."
        },
        {
          type: "match",
          q: "Match each curve type to the node that creates it.",
          pairs: [
            ["Line", "Line.ByStartPointEndPoint"],
            ["PolyCurve", "PolyCurve.ByPoints"],
            ["NurbsCurve", "NurbsCurve.ByControlPoints"]
          ],
          explain: "Line, PolyCurve, and NurbsCurve are all kinds of curve. Each has its own constructor, but they share query nodes like Length, StartPoint, and PointAtParameter."
        },
        {
          type: "truefalse",
          q: "Curves are commonly used as the scaffold from which surfaces are built.",
          answer: true,
          explain: "Curves define profiles, boundaries, and rails that surfacing nodes rely on. For example, lofting through profile curves or patching a closed boundary curve produces a surface."
        },
        {
          type: "mcq",
          q: "Which node returns the direction a curve is heading at a given parameter t?",
          choices: [
            "Curve.Length",
            "Curve.TangentAtParameter",
            "Curve.StartPoint",
            "Curve.EndPoint"
          ],
          answer: 1,
          explain: "Curve.TangentAtParameter returns the tangent direction of the curve at parameter t. Alongside PointAtParameter and CoordinateSystemAtParameter, it lets you sample a curve as you travel along it."
        },
        {
          type: "order",
          q: "Order these curve query nodes by the parameter they evaluate at, from the start of the curve to the end.",
          items: [
            "Curve.StartPoint (t = 0)",
            "Curve.PointAtParameter(0.5) (mid-curve)",
            "Curve.EndPoint (t = 1)"
          ],
          explain: "StartPoint corresponds to parameter 0, PointAtParameter at 0.5 sits halfway along, and EndPoint corresponds to parameter 1. The normalized range keeps these consistent for any curve length."
        },
        {
          type: "fill",
          q: "To measure how long a curve is, you query Curve.____.",
          answer: "Length",
          accept: ["length"],
          explain: "Curve.Length returns the true measured length of the curve in model units, regardless of the normalized 0-to-1 parameter range used for evaluation."
        },
        {
          type: "mcq",
          q: "What kind of curve does NurbsCurve.ByControlPoints produce?",
          choices: [
            "A straight line only",
            "A smooth free-form curve shaped by control points",
            "A closed rectangle",
            "A flat plane"
          ],
          answer: 1,
          explain: "NurbsCurve.ByControlPoints builds a smooth, free-form curve whose shape is guided by control points. NURBS curves are ideal for the flowing geometry common in computational design."
        }
      ]
    },
    {
      id: "l165",
      title: "Surfaces",
      intro: "Two-parameter U-V geometry, how to create it, and how to query it.",
      questions: [
        {
          type: "mcq",
          q: "A surface is defined by how many parameters, and what are they called?",
          choices: [
            "One parameter, called t",
            "Two parameters, called U and V",
            "Three parameters, called X, Y, and Z",
            "No parameters at all"
          ],
          answer: 1,
          explain: "A surface uses a 2D parameter space with two parameters, U and V, instead of the single t used by curves. Sampling a surface therefore requires both a U and a V value."
        },
        {
          type: "fill",
          q: "To create a surface by threading through a series of profile curves, you use Surface.____.",
          answer: "ByLoft",
          accept: ["byloft", "by loft", "loft"],
          explain: "Surface.ByLoft builds a surface that passes through a set of profile curves in sequence, much like stretching a skin across the profiles."
        },
        {
          type: "match",
          q: "Match each surface node to what it does.",
          pairs: [
            ["Surface.ByPatch", "Fill a closed boundary curve"],
            ["Surface.ByLoft", "Thread through profile curves"],
            ["Surface.Thicken", "Turn a surface into a solid"],
            ["Surface.Area", "Query the surface's area"]
          ],
          explain: "ByPatch fills a closed boundary, ByLoft threads through profiles, Thicken gives a surface thickness to make a solid, and Area reports the measured surface area."
        },
        {
          type: "truefalse",
          q: "Surface.Thicken converts a surface into a solid by giving it thickness.",
          answer: true,
          explain: "A surface has no volume, but Surface.Thicken offsets it on both sides (or one side) to produce a closed solid. It is a common bridge from surface geometry to solids."
        },
        {
          type: "mcq",
          q: "Which node evaluates a point on a surface at specific U and V parameters?",
          choices: [
            "Surface.PointAtParameter(u, v)",
            "Curve.PointAtParameter(t)",
            "Surface.Area",
            "Point.ByCoordinates(x, y, z)"
          ],
          answer: 0,
          explain: "Surface.PointAtParameter takes a U and a V value and returns the point at that location in the surface's parameter space. This is how you sample positions across a surface."
        },
        {
          type: "order",
          q: "Order these steps to loft a surface from curves and then measure its area.",
          items: [
            "Create profile curves",
            "Use Surface.ByLoft to build the surface",
            "Use Surface.Area to measure it"
          ],
          explain: "You first need the profile curves, then Surface.ByLoft threads a surface through them, and finally Surface.Area returns the measured area of the resulting surface."
        },
        {
          type: "truefalse",
          q: "Surface.NormalAtParameter returns the direction a surface faces at a given U and V location.",
          answer: true,
          explain: "The normal is the vector perpendicular to the surface at a point. Surface.NormalAtParameter is essential for orienting panels, offsetting, or aligning objects to a surface."
        },
        {
          type: "fill",
          q: "To offset a surface a set distance while keeping it as a surface, you use Surface.____.",
          answer: "Offset",
          accept: ["offset"],
          explain: "Surface.Offset moves a surface a specified distance along its normals to create a new surface. This differs from Thicken, which produces a closed solid rather than a surface."
        }
      ]
    },
    {
      id: "l166",
      title: "Solids",
      intro: "Closed volumes, the topology they expose, and boolean operations for combining them.",
      questions: [
        {
          type: "mcq",
          q: "A Solid is best described as which of the following?",
          choices: [
            "An infinite flat helper plane",
            "A closed volume that exposes faces, edges, and vertices",
            "A single point in space",
            "A curve parametrized from 0 to 1"
          ],
          answer: 1,
          explain: "A Solid is a closed volume. Because it is watertight, it exposes topology (faces, edges, and vertices) and supports boolean operations for combining or cutting volumes."
        },
        {
          type: "match",
          q: "Match each boolean operation to its result.",
          pairs: [
            ["Solid.Union", "Combine solids into one"],
            ["Solid.Difference", "Subtract one solid from another"],
            ["Solid.Intersect", "Keep only the shared volume"]
          ],
          explain: "Union merges solids, Difference cuts one solid out of another, and Intersect keeps only the region where the solids overlap. These three are the core boolean toolkit."
        },
        {
          type: "fill",
          q: "To carve one solid out of another and keep the remainder, you use Solid.____.",
          answer: "Difference",
          accept: ["difference"],
          explain: "Solid.Difference subtracts one solid from another, leaving the material of the first minus the overlap. It is the go-to boolean for cutting voids and openings."
        },
        {
          type: "truefalse",
          q: "Curve.Extrude can produce a solid by sweeping a closed curve along a direction.",
          answer: true,
          explain: "Extruding a closed profile curve through a distance sweeps out a closed volume, producing a solid. Extrusion is one of the most common ways to generate solid geometry."
        },
        {
          type: "mcq",
          q: "Which node reports the amount of enclosed space inside a solid?",
          choices: [
            "Solid.Centroid",
            "Solid.Volume",
            "Surface.Area",
            "Curve.Length"
          ],
          answer: 1,
          explain: "Solid.Volume returns the measured volume enclosed by the solid. Solid.Centroid, by contrast, returns the point at the solid's center of mass."
        },
        {
          type: "order",
          q: "Order these steps to build a solid and then find its center of mass.",
          items: [
            "Create a closed profile curve",
            "Use Curve.Extrude to make a solid",
            "Use Solid.Centroid to find its center of mass"
          ],
          explain: "You start with a closed profile, extrude it into a solid, and then Solid.Centroid returns the center-of-mass point of that volume."
        },
        {
          type: "match",
          q: "Match each solid topology query to what it returns.",
          pairs: [
            ["Solid.Faces", "The bounding surfaces"],
            ["Solid.Edges", "The lines where faces meet"],
            ["Solid.Vertices", "The corner points"]
          ],
          explain: "A solid's topology breaks down into faces (its surfaces), edges (where faces meet), and vertices (the corner points). These let you target parts of a solid precisely."
        },
        {
          type: "truefalse",
          q: "Cuboid, Sphere, Cylinder, and Cone are primitive solids you can create directly in Dynamo.",
          answer: true,
          explain: "Dynamo provides primitive solid constructors such as Cuboid, Sphere, Cylinder, and Cone, giving you ready-made volumes without lofting or extruding from scratch."
        }
      ]
    },
    {
      id: "l167",
      title: "Transformations",
      intro: "Moving, rotating, scaling, mirroring, and re-spacing geometry non-destructively.",
      questions: [
        {
          type: "match",
          q: "Match each transformation node to what it does.",
          pairs: [
            ["Geometry.Translate", "Move by a vector or distance"],
            ["Geometry.Rotate", "Rotate about an axis by an angle"],
            ["Geometry.Scale", "Resize by a factor"],
            ["Geometry.Mirror", "Reflect across a plane"]
          ],
          explain: "Translate moves geometry, Rotate spins it about an axis, Scale changes its size by a factor, and Mirror reflects it across a plane. These are the everyday transforms."
        },
        {
          type: "truefalse",
          q: "In Dynamo, transformation nodes return NEW geometry rather than modifying the original in place.",
          answer: true,
          explain: "Transforms are non-destructive and functional: they output a new transformed copy while the original geometry remains unchanged. This keeps graphs predictable and easy to rewire."
        },
        {
          type: "mcq",
          q: "Geometry.Rotate expects its rotation angle to be given in which unit?",
          choices: [
            "Radians",
            "Degrees",
            "Gradians",
            "Percent"
          ],
          answer: 1,
          explain: "Geometry.Rotate takes its angle in degrees. Supplying radians by mistake is a common error that produces unexpectedly tiny or wrong rotations."
        },
        {
          type: "fill",
          q: "To reposition geometry from one CoordinateSystem into another, you use Geometry.____.",
          answer: "Transform",
          accept: ["transform"],
          explain: "Geometry.Transform maps geometry from a source coordinate system to a target one, repositioning and reorienting it in a single step. It is a powerful way to relocate assemblies."
        },
        {
          type: "mcq",
          q: "Which node would you use to move a piece of geometry a set distance along a given vector?",
          choices: [
            "Geometry.Translate",
            "Geometry.Mirror",
            "Geometry.Scale",
            "Solid.Volume"
          ],
          answer: 0,
          explain: "Geometry.Translate moves geometry by a vector (or a distance along a direction), producing a shifted copy while leaving the original in place."
        },
        {
          type: "order",
          q: "Order these transforms to place a copy of an object, then flip it, then shrink it.",
          items: [
            "Geometry.Translate to move a copy",
            "Geometry.Mirror to flip it across a plane",
            "Geometry.Scale to shrink it by a factor"
          ],
          explain: "Because each transform returns new geometry, you can chain them: translate to reposition, mirror to reflect, and scale to resize, each step feeding the next."
        },
        {
          type: "truefalse",
          q: "Geometry.Scale changes the size of geometry by multiplying it by a factor.",
          answer: true,
          explain: "Geometry.Scale resizes geometry by a numeric factor. A factor of 2 doubles the size and 0.5 halves it, scaling relative to a base point or origin."
        },
        {
          type: "mcq",
          q: "Why is the non-destructive nature of Dynamo transforms useful in a graph?",
          choices: [
            "It permanently deletes the original to save memory",
            "It preserves the original so you can reuse or re-reference it downstream",
            "It prevents you from ever mirroring geometry",
            "It forces every transform to be measured in radians"
          ],
          answer: 1,
          explain: "Because the original geometry survives each transform, you can branch off it, reuse it, or compare against it. This functional style makes computational graphs flexible and predictable."
        }
      ]
    },
    {
      id: "l168",
      title: "Parametric & Attractor Logic",
      intro: "Driving geometry with parameters, rules, and distance-based attractor patterns.",
      questions: [
        {
          type: "mcq",
          q: "What best defines computational design as taught in this unit?",
          choices: [
            "Drawing each element by hand with maximum manual control",
            "Geometry driven by parameters and rules rather than manual drawing",
            "Rendering photorealistic images of a finished building",
            "Exporting a model to a spreadsheet"
          ],
          answer: 1,
          explain: "Computational design means geometry is generated from parameters and rules rather than drawn manually. Change an input and the whole design updates automatically according to the logic."
        },
        {
          type: "fill",
          q: "Attractor logic starts by measuring each element's distance to an attractor using Geometry.____.",
          answer: "DistanceTo",
          accept: ["distanceto", "distance to"],
          explain: "Geometry.DistanceTo measures how far each element sits from an attractor point or curve. That distance is then mapped to drive size, height, rotation, or spacing."
        },
        {
          type: "mcq",
          q: "Which node remaps a range of measured distances into a different, usable output range?",
          choices: [
            "Math.RemapRange",
            "Geometry.Translate",
            "Surface.ByLoft",
            "Curve.Length"
          ],
          answer: 0,
          explain: "Math.RemapRange takes numbers from one range (for example, raw distances) and rescales them into a target range (for example, panel heights), which is central to attractor workflows."
        },
        {
          type: "order",
          q: "Order the steps of a basic attractor workflow.",
          items: [
            "Measure each element's distance to the attractor with Geometry.DistanceTo",
            "Remap those distances into a usable range with Math.RemapRange",
            "Apply the remapped values to drive size, height, or rotation"
          ],
          explain: "Attractor logic flows from measuring distances, to remapping them into a meaningful range, to applying those values as a parameter that reshapes each element."
        },
        {
          type: "truefalse",
          q: "Panelization means subdividing a surface across its U and V space into a grid of panels, such as for a facade.",
          answer: true,
          explain: "Panelization divides a surface's U-V parameter space into a grid of smaller panels. It is a standard computational-design task for cladding facades and other free-form skins."
        },
        {
          type: "match",
          q: "Match each computational-design tool to its role.",
          pairs: [
            ["Geometry.DistanceTo", "Measure distance to an attractor"],
            ["Math.RemapRange", "Rescale a range of values"],
            ["Sine function over a grid", "Create waves or undulation"],
            ["Panelization", "Subdivide a surface into panels"]
          ],
          explain: "DistanceTo measures, RemapRange rescales, sine functions over a grid produce undulating waves, and panelization subdivides a surface into a grid of panels."
        },
        {
          type: "mcq",
          q: "To build a full matrix (grid) of points from two lists of values, which lacing option is typically used?",
          choices: [
            "Shortest lacing",
            "Longest lacing",
            "Cross Product lacing",
            "No lacing at all"
          ],
          answer: 2,
          explain: "Cross Product lacing pairs every value in one list with every value in the other, producing a complete point matrix. It is how a grid of points is built from X and Y ranges."
        },
        {
          type: "truefalse",
          q: "Applying a sine function across a grid of points is a common way to create waves or undulation in a surface.",
          answer: true,
          explain: "Feeding grid positions through a sine function varies their height smoothly and periodically, creating the rolling wave forms often seen in parametric facades and canopies."
        }
      ]
    }
  ]
});
