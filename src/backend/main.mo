import List "mo:core/List";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Map "mo:core/Map";

actor {
  type Project = {
    title : Text;
    description : Text;
    githubLink : Text;
  };

  module Project {
    public func compare(project1 : Project, project2 : Project) : Order.Order {
      Text.compare(project1.title, project2.title);
    };
  };

  type Contact = {
    email : Text;
    linkedIn : Text;
    github : Text;
  };

  let projects = Map.empty<Text, Project>();

  let contactInfo : Contact = {
    email = "jishnudev@example.com";
    linkedIn = "linkedin.com/in/jishnudev";
    github = "github.com/jishnudev";
  };

  public shared ({ caller }) func addProject(title : Text, description : Text, githubLink : Text) : async () {
    if (projects.containsKey(title)) { Runtime.trap("Project with this title already exists.") };
    let project : Project = {
      title;
      description;
      githubLink;
    };
    projects.add(title, project);
  };

  public shared ({ caller }) func removeProject(title : Text) : async () {
    if (not projects.containsKey(title)) { Runtime.trap("Project does not exist.") };
    projects.remove(title);
  };

  public shared ({ caller }) func updateProject(title : Text, description : Text, githubLink : Text) : async () {
    switch (projects.get(title)) {
      case (null) { Runtime.trap("Project does not exist.") };
      case (?_) {
        let project : Project = { title; description; githubLink };
        projects.add(title, project);
      };
    };
  };

  public query ({ caller }) func getProject(title : Text) : async Project {
    switch (projects.get(title)) {
      case (null) { Runtime.trap("Project does not exist.") };
      case (?project) { project };
    };
  };

  public query ({ caller }) func getAllProjects() : async [Project] {
    projects.values().toArray().sort();
  };

  public query ({ caller }) func getContactInfo() : async Contact {
    contactInfo;
  };
};
