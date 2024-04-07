//
//  ContentView.swift
//  adidas
//
//  Created by Haya Alghazouli on 2/7/24.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: adidasDocument

    var body: some View {
        TextEditor(text: $document.text)
    }
}

#Preview {
    ContentView(document: .constant(adidasDocument()))
}
