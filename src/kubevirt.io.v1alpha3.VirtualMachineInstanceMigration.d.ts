/** Generated from Remote JSON Schema for kubevirt.io.v1alpha3.VirtualMachineInstanceMigration */

/**
 * VirtualMachineInstanceMigration represents the object tracking a VMI's migration
 * to another host in the cluster
 */
export interface KubevirtIoV1Alpha3VirtualMachineInstanceMigration {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  spec: {
    /**
     * AddedNodeSelector is an additional selector that can be used to
     * complement a NodeSelector or NodeAffinity as set on the VM
     * to restrict the set of allowed target nodes for a migration.
     * In case of key collisions, values set on the VM objects
     * are going to be preserved to ensure that addedNodeSelector
     * can only restrict but not bypass constraints already set on the VM object.
     */
    addedNodeSelector?: {
      [k: string]: string;
    };
    /**
     * Priority of the migration. This can be one of 'system-critical', 'user-triggered', 'system-maintenance'.
     */
    priority?: string;
    /**
     * If receieve is specified, this VirtualMachineInstanceMigration will be considered the target
     */
    receive?: {
      /**
       * A unique identifier to identify this migration.
       */
      migrationID: string;
      [k: string]: unknown;
    };
    /**
     * If sendTo is specified, this VirtualMachineInstanceMigration will be considered the source
     */
    sendTo?: {
      /**
       * The synchronization controller URL to connect to.
       */
      connectURL: string;
      /**
       * A unique identifier to identify this migration.
       */
      migrationID: string;
      [k: string]: unknown;
    };
    /**
     * The name of the VMI to perform the migration on. VMI must exist in the migration objects namespace
     */
    vmiName?: string;
    [k: string]: unknown;
  };
  /**
   * VirtualMachineInstanceMigration reprents information pertaining to a VMI's migration.
   */
  status?: {
    conditions?: {
      lastProbeTime?: string;
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status: string;
      type: string;
      [k: string]: unknown;
    }[];
    /**
     * Represents the status of a live migration
     */
    migrationState?: {
      /**
       * Indicates that the migration has been requested to abort
       */
      abortRequested?: boolean;
      /**
       * Indicates the final status of the live migration abortion
       */
      abortStatus?: string;
      /**
       * Indicates the migration completed
       */
      completed?: boolean;
      /**
       * The time the migration action ended
       */
      endTimestamp?: string;
      /**
       * Indicates that the migration failed
       */
      failed?: boolean;
      /**
       * Contains the reason why the migration failed
       */
      failureReason?: string;
      /**
       * Migration configurations to apply
       */
      migrationConfiguration?: {
        /**
         * AllowAutoConverge allows the platform to compromise performance/availability of VMIs to
         * guarantee successful VMI live migrations. Defaults to false
         */
        allowAutoConverge?: boolean;
        /**
         * AllowPostCopy enables post-copy live migrations. Such migrations allow even the busiest VMIs
         * to successfully live-migrate. However, events like a network failure can cause a VMI crash.
         * If set to true, migrations will still start in pre-copy, but switch to post-copy when
         * CompletionTimeoutPerGiB triggers. Defaults to false
         */
        allowPostCopy?: boolean;
        /**
         * AllowWorkloadDisruption indicates that the migration shouldn't be
         * canceled after acceptableCompletionTime is exceeded. Instead, if
         * permitted, migration will be switched to post-copy or the VMI will be
         * paused to allow the migration to complete
         */
        allowWorkloadDisruption?: boolean;
        /**
         * BandwidthPerMigration limits the amount of network bandwidth live migrations are allowed to use.
         * The value is in quantity per second. Defaults to 0 (no limit)
         */
        bandwidthPerMigration?: number | string;
        /**
         * CompletionTimeoutPerGiB is the maximum number of seconds per GiB a migration is allowed to take.
         * If the timeout is reached, the migration will be either paused, switched
         * to post-copy or cancelled depending on other settings. Defaults to 150
         */
        completionTimeoutPerGiB?: number;
        /**
         * When set to true, DisableTLS will disable the additional layer of live migration encryption
         * provided by KubeVirt. This is usually a bad idea. Defaults to false
         */
        disableTLS?: boolean;
        /**
         * By default, the SELinux level of target virt-launcher pods is forced to the level of the source virt-launcher.
         * When set to true, MatchSELinuxLevelOnMigration lets the CRI auto-assign a random level to the target.
         * That will ensure the target virt-launcher doesn't share categories with another pod on the node.
         * However, migrations will fail when using RWX volumes that don't automatically deal with SELinux levels.
         */
        matchSELinuxLevelOnMigration?: boolean;
        /**
         * Network is the name of the CNI network to use for live migrations. By default, migrations go
         * through the pod network.
         */
        network?: string;
        /**
         * NodeDrainTaintKey defines the taint key that indicates a node should be drained.
         * Note: this option relies on the deprecated node taint feature. Default: kubevirt.io/drain
         */
        nodeDrainTaintKey?: string;
        /**
         * ParallelMigrationsPerCluster is the total number of concurrent live migrations
         * allowed cluster-wide. Defaults to 5
         */
        parallelMigrationsPerCluster?: number;
        /**
         * ParallelOutboundMigrationsPerNode is the maximum number of concurrent outgoing live migrations
         * allowed per node. Defaults to 2
         */
        parallelOutboundMigrationsPerNode?: number;
        /**
         * ProgressTimeout is the maximum number of seconds a live migration is allowed to make no progress.
         * Hitting this timeout means a migration transferred 0 data for that many seconds. The migration is
         * then considered stuck and therefore cancelled. Defaults to 150
         */
        progressTimeout?: number;
        /**
         * UnsafeMigrationOverride allows live migrations to occur even if the compatibility check
         * indicates the migration will be unsafe to the guest. Defaults to false
         */
        unsafeMigrationOverride?: boolean;
        [k: string]: unknown;
      };
      /**
       * The type of migration network, either 'pod' or 'migration'
       */
      migrationNetworkType?: string;
      /**
       * Name of the migration policy. If string is empty, no policy is matched
       */
      migrationPolicyName?: string;
      /**
       * The VirtualMachineInstanceMigration object associated with this migration
       */
      migrationUid?: string;
      /**
       * Lets us know if the vmi is currently running pre or post copy migration
       */
      mode?: string;
      /**
       * The source node that the VMI originated on
       */
      sourceNode?: string;
      /**
       * If the VMI being migrated uses persistent features (backend-storage), its source PVC name is saved here
       */
      sourcePersistentStatePVCName?: string;
      sourcePod?: string;
      /**
       * SourceState contains migration state managed by the source virt handler
       */
      sourceState?: {
        /**
         * The name of the domain on the source libvirt domain
         */
        domainName?: string;
        /**
         * Namespace used in the name of the source libvirt domain. Can be used to find and modify paths in the domain
         */
        domainNamespace?: string;
        /**
         * The Source VirtualMachineInstanceMigration object associated with this migration
         */
        migrationUID?: string;
        /**
         * The source node that the VMI originated on
         */
        node?: string;
        /**
         * Node selectors needed by the target to start the receiving pod.
         */
        nodeSelectors?: {
          [k: string]: string;
        };
        /**
         * If the VMI being migrated uses persistent features (backend-storage), its source PVC name is saved here
         */
        persistentStatePVCName?: string;
        /**
         * The source pod that the VMI is originated on
         */
        pod?: string;
        /**
         * SELinuxContext is the actual SELinux context of the pod
         */
        selinuxContext?: string;
        /**
         * The ip address/fqdn:port combination to use to synchronize the VMI with the target.
         */
        syncAddress?: string;
        /**
         * VirtualMachineInstanceUID is the UID of the target virtual machine instance
         */
        virtualMachineInstanceUID?: string;
        [k: string]: unknown;
      };
      /**
       * The time the migration action began
       */
      startTimestamp?: string;
      /**
       * The UID of the target attachment pod for hotplug volumes
       */
      targetAttachmentPodUID?: string;
      /**
       * If the VMI requires dedicated CPUs, this field will
       * hold the dedicated CPU set on the target node
       */
      targetCPUSet?: number[];
      /**
       * The list of ports opened for live migration on the destination node
       */
      targetDirectMigrationNodePorts?: {
        [k: string]: number;
      };
      /**
       * The target node that the VMI is moving to
       */
      targetNode?: string;
      /**
       * The address of the target node to use for the migration
       */
      targetNodeAddress?: string;
      /**
       * The Target Node has seen the Domain Start Event
       */
      targetNodeDomainDetected?: boolean;
      /**
       * The timestamp at which the target node detects the domain is active
       */
      targetNodeDomainReadyTimestamp?: string;
      /**
       * If the VMI requires dedicated CPUs, this field will
       * hold the numa topology on the target node
       */
      targetNodeTopology?: string;
      /**
       * If the VMI being migrated uses persistent features (backend-storage), its target PVC name is saved here
       */
      targetPersistentStatePVCName?: string;
      /**
       * The target pod that the VMI is moving to
       */
      targetPod?: string;
      /**
       * TargetState contains migration state managed by the target virt handler
       */
      targetState?: {
        /**
         * The UID of the target attachment pod for hotplug volumes
         */
        attachmentPodUID?: string;
        /**
         * If the VMI requires dedicated CPUs, this field will
         * hold the dedicated CPU set on the target node
         */
        cpuSet?: number[];
        /**
         * The list of ports opened for live migration on the destination node
         */
        directMigrationNodePorts?: {
          [k: string]: number;
        };
        /**
         * The Target Node has seen the Domain Start Event
         */
        domainDetected?: boolean;
        /**
         * The name of the domain on the source libvirt domain
         */
        domainName?: string;
        /**
         * Namespace used in the name of the source libvirt domain. Can be used to find and modify paths in the domain
         */
        domainNamespace?: string;
        /**
         * The timestamp at which the target node detects the domain is active
         */
        domainReadyTimestamp?: string;
        /**
         * The Source VirtualMachineInstanceMigration object associated with this migration
         */
        migrationUID?: string;
        /**
         * The source node that the VMI originated on
         */
        node?: string;
        /**
         * The address of the target node to use for the migration
         */
        nodeAddress?: string;
        /**
         * If the VMI requires dedicated CPUs, this field will
         * hold the numa topology on the target node
         */
        nodeTopology?: string;
        /**
         * If the VMI being migrated uses persistent features (backend-storage), its source PVC name is saved here
         */
        persistentStatePVCName?: string;
        /**
         * The source pod that the VMI is originated on
         */
        pod?: string;
        /**
         * SELinuxContext is the actual SELinux context of the pod
         */
        selinuxContext?: string;
        /**
         * The ip address/fqdn:port combination to use to synchronize the VMI with the target.
         */
        syncAddress?: string;
        /**
         * VirtualMachineInstanceUID is the UID of the target virtual machine instance
         */
        virtualMachineInstanceUID?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * VirtualMachineInstanceMigrationPhase is a label for the condition of a VirtualMachineInstanceMigration at the current time.
     */
    phase?: string;
    /**
     * PhaseTransitionTimestamp is the timestamp of when the last phase change occurred
     */
    phaseTransitionTimestamps?: {
      /**
       * Phase is the status of the VirtualMachineInstanceMigrationPhase in kubernetes world. It is not the VirtualMachineInstanceMigrationPhase status, but partially correlates to it.
       */
      phase?: string;
      /**
       * PhaseTransitionTimestamp is the timestamp of when the phase change occurred
       */
      phaseTransitionTimestamp?: string;
      [k: string]: unknown;
    }[];
    /**
     * The synchronization addresses one can use to connect to the synchronization controller, includes the port, if multiple
     * addresses are available, the first one is reported in the synchronizationAddress field.
     */
    synchronizationAddresses?: string[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
