public class Twofer {
    public String twofer(String name) {
        return "One for " + (name == null || name.isEmpty() ? "you" : name) + ", one for me.";
    }
}
