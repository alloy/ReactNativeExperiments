Experiments to see if ReactNative will work for us.

Constraints that need to be met for ReactNative to be viable for us:

* We have an existing application.
* We want a iOS application to feel like a iOS application, including native navigation stack transitions etc.  
  _However_, our navigation controller does not look like a default UIKit one, e.g. we have no bar, so it _might_ be an
  option for us to use the x-platform ‘navigator’ component, granted the transition is identical to UIKit’s.
* Multiple VCs that represents the same resource:
  - Ideally updating one reflects state changes elsewhere in the navigation tree, or even in a different navigation tree
    (i.e. we have a tab bar where each tab holds a navigation tree)
  - Otherwise, it should at least be possible to have multiple ReactNative views in the navigation tree.
