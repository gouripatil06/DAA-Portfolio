/* eslint-disable indent */
// eslint-disable-next-line indent
export const codeSnippets = {
    'Depth First Search (DFS)': `
#include <iostream>
#include <vector>
#include <unordered_set>

void dfs(const std::vector<std::vector<int>>& graph, int node, std::unordered_set<int>& visited) {
    visited.insert(node);
    std::cout << "Visited: " << node << std::endl;
    for (int neighbor : graph[node]) {
        if (visited.find(neighbor) == visited.end()) {
            dfs(graph, neighbor, visited);
        }
    }
}

int main() {
    std::vector<std::vector<int>> graph = {
        {1, 2},      // Neighbors of node 0
        {0, 3, 4},   // Neighbors of node 1
        {0, 4},      // Neighbors of node 2
        {1, 5},      // Neighbors of node 3
        {1, 2, 5},   // Neighbors of node 4
        {3, 4}       // Neighbors of node 5
    };
    
    std::unordered_set<int> visited;
    dfs(graph, 0, visited); // Start DFS from node 0
    
    return 0;
}`,
    'Bubble Sort': `
#include <iostream>
#include <vector>

void bubbleSort(std::vector<int>& arr) {
    for (size_t i = 0; i < arr.size(); i++) {
        for (size_t j = 0; j < arr.size() - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]); // Swap elements
            }
        }
    }
}

int main() {
    std::vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    std::cout << "Original array: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    bubbleSort(arr);
    
    std::cout << "Sorted array: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    return 0;
}`,
};
