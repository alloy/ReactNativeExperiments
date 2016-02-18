workspace 'ReactNativeExperiments'

project 'EmbedInExistingNavigationStack/EmbedInExistingNavigationStack.xcodeproj'

target 'EmbedInExistingNavigationStack' do
  pod 'React', :path => './node_modules/react-native', :subspecs => [
    'Core',
    'RCTWebSocket', # Needed for source loading during dev
    'RCTText',
    #'RCTImage',
    'RCTNetwork', # TODO Is this needed during dev for better error reporting or something?
  ]

  pod 'SDWebImage', '>= 3.7.2'
  pod 'ARCollectionViewMasonryLayout', :git => 'https://github.com/ashfurrow/ARCollectionViewMasonryLayout'
  pod 'FLKAutoLayout', :git => 'https://github.com/alloy/FLKAutoLayout.git', :branch => 'add-support-for-layout-guides-take-2'
end
